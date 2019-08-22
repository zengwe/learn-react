import React from 'react';
import './parent-to-child.scss';
import { Child } from './child/child';
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
