## WebGPU计算加速

### 引入
WebGPU目前能够处理两种类型的管线
1. 渲染管线：用于渲染图形，通常渲染到canvas元素中，主要分为顶点着色阶段和片元着色阶段
2. 计算管线：用于通用计算。计算管线包含单独的计算阶段，在该阶段中，计算着色器（compute shader）接受通用的数据，在指定数量的工作组之间并行处理数据，然后将结果返回到缓冲区
GPGPU（General-purpose computing on graphics processing units）可以理解为利用GPU的并行计算能力去处理计算密集型的任务

### Hello World
我们使用WebGPU API配合WGSL（WebGPU的着色器语言）去实现一个最简单的GPGPU示例，示例中会对一个一维数组中的每个元素进行操作，这些操作是并行的
```js
  async function main() {
  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) {
    alert("need a browser that supports WebGPU");
    return;
  }

  const module = device.createShaderModule({
    label: "doubling compute module",
    code: `
      @group(0) @binding(0) var<storage, read_write> data: array<f32>;

      @compute @workgroup_size(1) fn computeSomething(
        @builtin(global_invocation_id) id: vec3u
      ) {
        let i = id.x;
        data[i] = data[i] * 2.0;
      }
    `,
  });

  const pipeline = device.createComputePipeline({
    label: "doubling compute pipeline",
    layout: "auto",
    compute: {
      module,
    },
  });

  const input = new Float32Array([1, 3, 5]);

  // create a buffer on the GPU to hold our computation
  // input and output
  const workBuffer = device.createBuffer({
    label: "work buffer",
    size: input.byteLength,
    usage:
      GPUBufferUsage.STORAGE |
      GPUBufferUsage.COPY_SRC |
      GPUBufferUsage.COPY_DST,
  });

  // Copy our input data to that buffer
  device.queue.writeBuffer(workBuffer, 0, input);

  // create a buffer on the GPU to get a copy of the results
  const resultBuffer = device.createBuffer({
    label: "result buffer",
    size: input.byteLength,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
  });

  // Setup a bindGroup to tell the shader which
  // buffer to use for the computation
  const bindGroup = device.createBindGroup({
    label: "bindGroup for work buffer",
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: workBuffer } }],
  });

  // Encode commands to do the computation
  const encoder = device.createCommandEncoder({
    label: "doubling encoder",
  });
  const pass = encoder.beginComputePass({
    label: "doubling compute pass",
  });
  pass.setPipeline(pipeline);
  pass.setBindGroup(0, bindGroup);
  pass.dispatchWorkgroups(input.length);
  pass.end();

  // Encode a command to copy the results to a mappable buffer.
  encoder.copyBufferToBuffer(workBuffer, 0, resultBuffer, 0, resultBuffer.size);

  // Finish encoding and submit the commands
  const commandBuffer = encoder.finish();
  device.queue.submit([commandBuffer]);

  // Read the results
  await resultBuffer.mapAsync(GPUMapMode.READ);
  const result = new Float32Array(resultBuffer.getMappedRange().slice());
  resultBuffer.unmap();

  console.log("input", input);
  console.log("result", result);
}
main();
```
### 使用js编写计算任务
使用WGSL语言最直接，但对于前端开发者来说有额外心智负担，另外在字符串里写代码会丧失语法高亮。
gpu.js支持将js的一个子集（并不支持全部js语法）编译为WGSL，因此前端开发者可以使用js来编写计算任务。
```js
function gpuHandleVector() {
    const gpu = new GPU.GPU();
    const vectorHandler = gpu
        .createKernel(function (data) {
          let i = this.thread.x;
            return data[i] * 2;
        })
        .setOutput([3]);

    let data = [1,2,3];
    const result = vectorHandler(data);
    console.log(result, "result");
}
```
附：gpu.js踩坑 https://github.com/gpujs/gpu.js/issues/490
### 矩阵乘法如何并行计算
两个矩阵相乘的实现是一个三重循环，对于结果矩阵的每个元素，都需要遍历两个矩阵对应行和列的所有元素，然后将它们相乘并累加。

```js
function cpuMultiplyMatrix(a, b, matrixSize) {
  let productRow = Array.apply(null, new Array(matrixSize)).map(
    Number.prototype.valueOf,
    0
  );
  let product = new Array(matrixSize);
  for (let p = 0; p < matrixSize; p++) {
    product[p] = productRow.slice();
  }

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      for (let k = 0; k < matrixSize; k++) {
        product[i][j] += a[i][k] * b[k][j];
      }
    }
  }
}
```

但实际上结果矩阵中每个元素的结果彼此之间没有依赖关系，可进行并行计算
```js
function gpuMultiplyMatrix(a,b,matrixSize) {
  const gpu = new GPU.GPU();
  const multiplyMatrix = gpu
    .createKernel(function (a, b, matrixSize) {
      let sum = 0;
      for (let i = 0; i < matrixSize; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
      }
      return sum;
    })
    .setOutput([matrixSize, matrixSize]);
  const resultMatrix = multiplyMatrix(a, b, matrixSize);
}
```
### 实际应用场景
可视化场景中存在很多适合GPU执行的可并行计算任务，例如布局计算

G6中的Fruchterman布局算法是一个很典型的例子，在每次迭代中每个节点的位置都需要根据其他节点位置进行计算，并且需要经历很多次迭代才能达到稳定状态，因此计算量很大。
https://g.antv.antgroup.com/zh/examples/gpgpu/graph-analysis-algorithm/#fruchterman

https://juejin.cn/post/7013538544647929893?searchId=20240621094249CB4CAFAE790A435E9BB8


### 参考资料
WebGPU介绍：https://developer.mozilla.org/zh-CN/docs/Web/API/WebGPU_API
WebGPU基础教程：https://webgpufundamentals.org/webgpu/lessons/zh_cn/webgpu-fundamentals.html
antv/g官网关于GPGPU介绍：https://g.antv.antgroup.com/api/gpgpu/intro
GPU.js官网：https://gpu.rocks/