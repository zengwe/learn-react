# react之组件基本用法
代码：[github-learn-react](https://github.com/zengwe/learn-react)
## 普通组件
### 代码
```jsx
import React from 'react';
import './regular.scss';

export interface IRegularProps {

}
export interface IRegularState {

}
export class Regular extends React.Component<IRegularProps, IRegularState> {
  constructor(props: IRegularProps, state: IRegularState) {
    super(props, state);
  }
  render() {
    return (
      <div>regular works!</div>
    );
  }
}
```

- IRegularProps 定义props
- IRegularState 定义state

### 使用
```jsx
    <Regular />
    <Regular></Regular>
```

## 事件与state的处理
### 代码
```jsx
import React from 'react';
import './event-comp.scss';

export interface IEventCompProps {

}
export interface IEventCompState {
  count: number;
  otherCount: number;
}
export class EventComp extends React.Component<IEventCompProps, IEventCompState> {
  public state = { count: 1, otherCount: 1};
  constructor(props: IEventCompProps, state: IEventCompState) {
    super(props, state);
  }
  protected addCount() {
    this.setState({
      count: ++this.state.count
    });
  }
  protected addOtherCount() {
    this.setState((prevState, props) => {
      return(
        {otherCount: ++this.state.otherCount}
      );
    });
  }
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={this.addCount.bind(this)}>增加</button>
        <div>otherCount: {this.state.otherCount}</div>
        <button onClick={this.addOtherCount.bind(this)}>增加otherCount</button>
      </div>
    );
  }
}
```

setState定义
```typescript
setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
            callback?: () => void
        ): void;
```
setState可以传state的变更后的对象进去，由于setState是异步操作，所以在setState方法后面this.state的值并未改变，但是可以在callback中获取变化后的state
setState也可以传一个Function，传递一个函数而不是一个对象有什么意义呢？因为 setState 是异步的，依赖它来创建一个新的值将有一些陷阱的里面。例如当 setState 调用的时候，另一个 setState 也可能修改了状态。传递给 setState 一个方法有两个好处：

允许我们获取状态的静态副本，而且该副本永远不会单独改变；
自动对 setState 的调用排序，保证调用执行的顺序；
## 事件
需要绑定this来指向这个对象

## 组件嵌套
嵌套的组件在props.children中,当嵌套一个组件是children为对象，一个以上时是一个数组
组件
```jsx
import React from 'react';
import './solt.scss';

export interface ISoltProps {

}
export interface ISoltState {

}
export class Solt extends React.Component<ISoltProps, ISoltState> {
  constructor(props: ISoltProps, state: ISoltState) {
    super(props, state);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        this is a solt component!
        {this.props.children}
      </div>
    );
  }
}
```
使用
```jsx
<Solt>
    <Regular />
</Solt>
<Solt>
    <Regular />
    <Regular />
</Solt>
```

