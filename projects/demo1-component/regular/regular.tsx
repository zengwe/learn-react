import React from 'react';
import './regular.scss';

export interface IRegularProps {

}
export interface IRegularState {

}
export class Regular extends React.Component<IRegularProps, IRegularState> {
  constructor(props: IRegularProps, state: IRegularState) {
    super(props, state);
  }
  render() {
    return (
      <div>regular works!</div>
    );
  }
}
