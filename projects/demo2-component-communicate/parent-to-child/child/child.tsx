import React from 'react';
import './child.scss';

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
