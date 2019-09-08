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
