### 在微信开发者工具中启动taro项目
1. npx @tarojs/cli init myApp初始化项目，npm install
2. 打开微信开发者工具导入初始项目，此时模拟器会报错
3. 新建终端，运行npm run dev : weapp生成dist目录后，模拟器中页面正常
原因是project.config.json中配置了"miniprogramRoot": "dist/"，将dist作为小程序根目录

### 从已有taro项目（qince简介）学习
#### @tarojs/taro  常用API
页面跳转：navigateTo( { url } )
页面分享：useShareAppMessage()
路由参数获取：getCurrentInstance().router.params

#### LazyImage组件封装
1. 首先封装一个hook函数useInViewport，它会接收元素的某个唯一类名，然后基于这个类名去观测目标元素是否在视口内，如果目标元素在视口内，则返回visible为true
``` jsx
import { useEffect, useState } from "react";
import { getCurrentInstance, createIntersectionObserver } from "@tarojs/taro";

function useInViewport({ target }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = createIntersectionObserver(getCurrentInstance().page, {
      observeAll: true,
    });
    setTimeout(() => {
      observer.relativeToViewport().observe(`.${target}`, (res) => {
        // console.log(res);
        // 最顶部元素暴露在视口的比例大于0时则触顶
        if (res.intersectionRatio > 0) {
          setVisible(true);
        } else {
          if (visible) {
            observer.disconnect();
          }
        }
      });
    }, 0);
    return () => {
      if (observer) observer.disconnect();
    };
  });

  return [visible];
}

export default useInViewport;
```

2. 在LazyImage组件中使用useInViewport，通过useInViewport返回的visible来控制是否显示图片

注意这边使用lodash/uniqueId去生成了一个唯一类名（拼在原有类名的前面），并且用useRef来做数据缓存
```jsx
import { useRef } from "react";
import uniqueId from "lodash/uniqueId";
import { View } from "@tarojs/components";
import { Image } from "@nutui/nutui-react-taro";
import useInViewport from "./useInViewPort";

function LazyImage({ root, width, height, className, viewStyle={}, ...others }) {
  const target = useRef(uniqueId("lazy-image-wrap"));

  const [visible] = useInViewport({
    target: target.current,
    component: LazyImage,
  });

  return (
    <View className={target.current + ' ' + className} style={{ width: width ?? '100%', height: height ?? '100%', ...viewStyle }}>
      {visible && <Image {...others} width={width} height={height} />}
    </View>
  );
}

export default LazyImage;
```
#### @nutui/nutui-react-taro 用于数据展示的组件
网格布局：Grid
文本超出一定行数即省略：Ellipsis

#### @tarojs/components
外部网页嵌入：WebView
结合getCurrentInstance().router.params拿到传过来的url

```jsx title="pages/webView/index.jsx"
import { View, WebView } from "@tarojs/components";
import { getCurrentInstance, useShareAppMessage } from "@tarojs/taro";

export default () => {
  const { url, title } = getCurrentInstance().router.params;

  useShareAppMessage(() => {
    return {
      title: title,
      path: `/pages/webView/index?url=${url}`,
    };
  });

  return (
    <View>
      <WebView src={url}></WebView>
    </View>
  );
};
```