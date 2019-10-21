import React from 'react';
import './annotate.scss';

export interface IAnnotateProps {

}
export interface IAnnotateState {

}
export class Annotate extends React.Component<IAnnotateProps, IAnnotateState> {
  constructor(props: IAnnotateProps, state: IAnnotateState) {
    super(props, state);
  }
  render() {
    return (
      <div>annotate works!</div>
    );
  }
}
