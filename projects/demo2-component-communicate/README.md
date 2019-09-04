# react学习之组件间通信
代码：[github-learn-react](https://github.com/zengwe/learn-react)
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
## 跨组件通信
在父*父组件定义跨组件的对象内容和跨组件对象的的类型，并且定义获取对象的方法
```typescript
    import PropTypes from 'prop-types';
export interface ICrossGradeProps {
  
}
export interface ICrossGradeState {
  count: number;
  myname: string;
}
export class CrossGrade extends React.Component<ICrossGradeProps, ICrossGradeState> {
  // constructor(props: ICrossGradeProps, state: ICrossGradeState) {
  //   super(props, state);
  // }
  state = {count: 1, myname: 'CrossGrade'};
  static childContextTypes = { // 定义跨数据类型
    count: PropTypes.number,
    name: PropTypes.string
  }
  getChildContext() { // 定义获取方法
    return {
      count: this.state.count,
      name: this.state.myname
    }
  }
  render() {
    return (
      <div>
        cross-grade works!
        <Parent />
      </div>
    );
  }
}
```
获取跨组件传递的值
```tsx
import React from 'react';
import './child.scss';
import PropTypes from 'prop-types';
export interface IChildProps {

}
export interface IChildState {

}
export class Child extends React.Component<IChildProps, IChildState> {
//   constructor(props: IChildProps, state: IChildState) {
//     super(props, state);
//   }
  static contextTypes = { // 定义获取值的数据类型
    count: PropTypes.number,
    name: PropTypes.string
  }
  render() {
    return (
      <div>child works! {this.context.count}{this.context.name}</div>
    );
  }
}
```
> 跨组件从获取值的组件一直往上层组件找，找到最近的一个数据类型相同的就返回值
## 兄弟组件间通信
```bash
npm install events --save
```
```typescript
import { EventEmitter } from "events";
```
通过上级组件传递或者定义一种类似单例的方式来实现发布订阅即可