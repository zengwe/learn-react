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
