import React from 'react';
import './Home.scss';

export interface IHomeProps {

}
export interface IHomeState {

}
export class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps, state: IHomeState) {
    super(props, state);
  }
  render() {
    return (
      <div>Home works!</div>
    );
  }
}
