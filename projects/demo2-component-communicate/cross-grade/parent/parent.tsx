import React from 'react';
import './parent.scss';
import { Child } from '../child/child';
export interface IParentProps {

}
export interface IParentState {

}
export class Parent extends React.Component<IParentProps, IParentState> {
  // constructor(props: IParentProps, state: IParentState) {
  //   super(props, state);
  // }
  render() {
    return (
      <div>
        parent works!
        <Child></Child>
      </div>
    );
  }
}
