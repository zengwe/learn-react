import React from 'react';
import './child-to-parent.scss';
import { Child } from './child/child';
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
