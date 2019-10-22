import React from 'react';
import './hoc.scss';

export interface IHocProps {

}
export interface IHocState {

}
export class Hoc extends React.Component<IHocProps, IHocState> {
  constructor(props: IHocProps, state: IHocState) {
    super(props, state);
  }
  render() {
    return (
      <div>hoc works!</div>
    );
  }
}
