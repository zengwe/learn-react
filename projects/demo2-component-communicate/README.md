# react学习之组件间通信

## 父组件与子组件通信
通过props传递
```tsx
export interface IChildProps {
  parentTellMe: string;
}
export interface IChildState {

}
export class Child extends React.Component<IChildProps, IChildState> {
  // constructor(props: IChildProps, state: IChildState) {
  //   super(props, state);
  // }
  render() {
    return (
      <div>child works! parent tell me: {this.props.parentTellMe}</div>
    );
  }
}
export interface IParentToChildProps {

}
export interface IParentToChildState {

}
export class ParentToChild extends React.Component<IParentToChildProps, IParentToChildState> {
  // constructor(props: IParentToChildProps, state: IParentToChildState) {
  //   super(props, state);
  // }
  render() {
    return (
      <div>
        parent-to-child works!
        <Child parentTellMe="呵呵哒！"></Child>
      </div>
    );
  }
}
```
## 子组件与父组件通信
通过父组件传递的props中添加函数来调用实现父组件与子组件通信
```tsx
export interface IChildToParentProps {

}
export interface IChildToParentState {
  count: number;
}
export class ChildToParent extends React.Component<IChildToParentProps, IChildToParentState> {
  // constructor(props: IChildToParentProps, state: IChildToParentState) {
  //   super(props, state);
  // }
  state = { count: 1};
  public childTellMeAdd() {
    this.setState((prevState) => {
      return { count: prevState.count + 1};
    });
  }
  render() {
    return (
      <div>
        child-to-parent works!count: {this.state.count}
        <Child callback={this.childTellMeAdd.bind(this)}></Child>
      </div>
    );
  }
}
import React from 'react';
import './child.scss';

export interface IChildProps {
  callback: ()=>void;
}
export interface IChildState {

}
export class Child extends React.Component<IChildProps, IChildState> {
  constructor(props: IChildProps, state: IChildState) {
    super(props, state);
  }
  render() {
    return (
      <div>
        child works!
        <button onClick={this.props.callback}>tell parent add</button>
      </div>
    );
  }
}
```
## 兄弟组件间通信
```bash
npm install events --save
```
```typescript
import { EventEmitter } from "events";
```
通过上级组件传递或者定义一种类似单例的方式来实现发布订阅即可