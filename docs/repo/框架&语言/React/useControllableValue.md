
### 组件的受控/非受控模式
- 非受控组件：组件状态不受外部控制，而是封闭在组件内部。
``` jsx
const Child = (props) => {
  const [innerValue, setInnerValue] = useState('');
  return (
    <input
      value={innerValue}
      onChange={(e) => {setInnerValue(e.target.value)}}
    />
  );
};
```
- 受控组件：组件状态受外部控制，状态存储在组件外，而不是封闭在组件内。
``` jsx
const Child = (props) => {
  const {value, onChange} = props
  // 组件内部使用props中传入的value和事件处理器函数onChange
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
```
总结一下两者的区别，就是在于组件内部的state是不是取决于父组件传递进来的props

### 如何让一个组件同时支持受控/非受控模式
尽管在业务项目中，我们写的组件都是明确的受控或者非受控，但对于组件库来说，几乎全部的涉及到输入值、切换、展开收起的组件，都是需要做到既受控又非受控的。

那要让一个组件同时支持受控/非受控模式，可以考虑将之前这分别实现了这两种模式的组件代码结合起来。要让我支持受控，那就得传进来value和onChange参数；要让我支持非受控，那就得在没有value和onChange参数的情况下，组件自己维护一个内部state。

进一步来想，组件内部其实可以始终维护一个自己的innerValue，没有value和onChange参数的情况下直接用这个就行，当有value和onChange参数时，就手动更新这个innerValue，使得内外两个状态保持同步。

``` jsx
const Child = (props) => {
  const {value, onChange} = props;
  //根据有没有传入value来判断是否受控
  const isControlled = props.hasOwnProperty("value");
  const [innerValue, setInnerValue] = useState(value);
  
  useEffect(()=>{
    // 受控情况下手动更新组件内部状态，使得内外两个状态保持同步
    if(isControlled){
        setInnerValue(props.value)
    }
  },[isControlled, value])

  return (
    <input
      value={innerValue}
      onChange={(e) => {
        if (!isControlled) {
            setInnerValue(e.target.value);
        }
        onChange && onChange(e.target.value);
      }}
    ></input>
  );
};
```

### ref + useUpdate模式 vs state + useEffect模式
使用useEffect去做更新，会导致子组件内部的值并非最新，而比父组件要晚一个渲染周期；而且也会存在多了一次渲染的性能问题。

因此我们把状态值直接写进dom中，用ref.current去获取值
``` jsx
const Child = (props) => {
  const {value, onChange} = props;
  //根据有没有传入value来判断是否受控
  const isControlled = props.hasOwnProperty("value");
  const stateRef = useRef(value);
  const update = useUpdate();

  return (
    <input
      value={stateRef.current}
      onChange={(e) => {
        stateRef.current = e.target.value;
        update();
        onChange && onChange(e.target.value);
      }}
    ></input>
  );
};
```

### useControllableValue

很多组件都需要支持能够切换受控和非受控模式。因此在ahooks中提供了这样一个hook：useControllableValue去提供这种能力，使用方式与useState类似

以下是useControllableValue的源码（含注释版）
来源于`https://juejin.cn/post/7207810396420669477?searchId=20230926133117DA1DB4B3EA2D66111FB1#heading-2`

useControllableValue gitbub源码：`https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useControllableValue/index.ts`
``` tsx
function useControllableValue<T = any>(props: Props = {}, options: Options<T> = {}) {
  const {
    defaultValue, // 默认值，会被 props.defaultValue 和 props.value 覆盖
    defaultValuePropName = 'defaultValue', // 默认值的属性名
    valuePropName = 'value', // 值的属性名
    trigger = 'onChange', // 修改值时，触发的函数
  } = options;
  // 外部（父级）传递进来的 props 值
  const value = props[valuePropName] as T;
  // 是否受控：判断 valuePropName（默认即表示value属性），有该属性代表受控
  const isControlled = props.hasOwnProperty(valuePropName);

  // 首次默认值
  const initialValue = useMemo(() => {
    // 受控：则由外部的props接管控制 state
    if (isControlled) {
      return value;
    }
    // 外部有传递 defaultValue，则优先取外部的默认值
    if (props.hasOwnProperty(defaultValuePropName)) {
      return props[defaultValuePropName];
    }
    // 优先级最低，组件内部的默认值
    return defaultValue;
  }, []);

  const stateRef = useRef(initialValue);
  // 受控组件：如果 props 有 value 字段，则由父级接管控制 state
  if (isControlled) {
    stateRef.current = value;
  }

  // update：调用该函数会强制组件重新渲染
  const update = useUpdate();

  function setState(v: SetStateAction<T>, ...args: any[]) {
    const r = isFunction(v) ? v(stateRef.current) : v;

    // 非受控
    if (!isControlled) {
      stateRef.current = r;
      update(); // 更新状态
    }
    // 只要 props 中有 onChange（trigger 默认值未 onChange）字段，则在 state 变化时，就会触发 onChange 函数
    if (props[trigger]) {
      props[trigger](r, ...args);
    }
  }

  // 返回 [状态值, 修改 state 的函数]
  return [stateRef.current, useMemoizedFn(setState)] as const;
}
```
相比于我们之前的demo（为单个input组件实现受控/非受控模式），useControllableValue中的逻辑要复杂许多，主要多出了以下这几点：
1. 初始化ref中的值时考虑了defaultValue参数
2. 支持用valuePropName和trigger去配置value和onChange的名称
3. 考虑setState中参数传入一个函数的情况

### 参考文章：
https://zhuanlan.zhihu.com/p/536322574

https://github.com/jtwang7/mind-palace/tree/main/notes/%5B%E9%98%85%E8%AF%BB%5D%20%E5%B0%81%E8%A3%85(%E9%9D%9E)%E5%8F%97%E6%8E%A7%E7%8A%B6%E6%80%81%3A%20%E5%AF%B9%E6%AF%94%20arco-design%3AuseMergeValue%20%E4%B8%8E%20ahooks%3AuseControllableValue%20%E5%AE%9E%E7%8E%B0