import React from 'react';
import './profile.scss';

export interface IProfileProps {

}
export interface IProfileState {

}
export class Profile extends React.Component<IProfileProps, IProfileState> {
  constructor(props: IProfileProps, state: IProfileState) {
    super(props, state);
  }
  render() {
    return (
      <div>profile works!</div>
    );
  }
}
