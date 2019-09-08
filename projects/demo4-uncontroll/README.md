# react受控组件和非受控组件
## 受控组件
```tsc
import React from 'react';
import './controll.scss';
export interface IControllProps {}
export interface IControllState {
  username: string;
  password: string;
}
export class Controll extends React.Component<IControllProps, IControllState> {
  state = {
    username: 'zengwe',
    password: '123456'
  }
  inputChange(val: any) {
    this.setState(val);
  }
  render() {
    return (
      <div>
        <div>
          username:<input type="text" value={this.state.username} onChange={(e) => { this.inputChange({username: e.target.value})}}/>
        </div>
        <div>
          password:<input value={this.state.password}  onChange={(e) => { this.inputChange({password: e.target.value})}}></input>
        </div>
        <div>
          username: {this.state.username}&nbsp;&nbsp;&nbsp;&nbsp;password: {this.state.password}
        </div>
      </div>
    );
  }
}
```
受控组件的input必须要通过input相关的事件去触发state值的变更，然后再用setState来触发dom的对比渲染
## 非受控组件
```tsc
import React from 'react';
import './uncontroll.scss';
export interface IUncontrollProps {}
export interface IUncontrollState {}
export class Uncontroll extends React.Component<IUncontrollProps, IUncontrollState> {
  username: React.RefObject<HTMLInputElement>;
  constructor(props: IUncontrollProps, state: IUncontrollState) {
    super(props, state);
    this.username = React.createRef<HTMLInputElement>();
  }
  render() {
    return (
      <div>
        <div>
          username:<input type="text" ref={this.username}/>
        </div>
      </div>
    );
  }
}
```
```typescript
    interface RefObject<T> {
        readonly current: T | null;
    }
```
通过ref来创建htmlInputElement的引用，就可以随时获取input的value，也可以使用ref来操作真实的DOM