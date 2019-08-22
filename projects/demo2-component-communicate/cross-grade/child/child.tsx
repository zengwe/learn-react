import React from 'react';
import './child.scss';
import PropTypes from 'prop-types';
export interface IChildProps {

}
export interface IChildState {

}
export class Child extends React.Component<IChildProps, IChildState> {
  // constructor(props: IChildProps, state: IChildState) {
  //   super(props, state);
  // }
  static contextTypes = {
    count: PropTypes.number,
    name: PropTypes.string
  }
  render() {
    return (
      <div>child works! {this.context.count}{this.context.name}</div>
    );
  }
}
