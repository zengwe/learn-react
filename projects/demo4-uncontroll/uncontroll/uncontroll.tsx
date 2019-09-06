import React from 'react';
import './uncontroll.scss';

export interface IUncontrollProps {

}
export interface IUncontrollState {

}
export class Uncontroll extends React.Component<IUncontrollProps, IUncontrollState> {
  username: any = '';
  password: any = '';
  constructor(props: IUncontrollProps, state: IUncontrollState) {
    super(props, state);
    this.username = React.createRef<string>();
    // let dd = React.createRef<HTMLInputElement>();
    // if(dd.current != null) {
    //   dd.current.value
    // }
  }
  change() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <div>
          username:<input type="text" ref={this.username} onChange={this.change.bind(this)}/>
        </div>
        <div>
          {/* password:<input value={this.state.password}  onChange={(e) => { this.inputChange({password: e.target.value})}}></input> */}
        </div>
        <div>
          {/* username: {this.username}&nbsp;&nbsp;&nbsp;&nbsp;password: {this.password} */}
        </div>
      </div>
    );
  }
}
