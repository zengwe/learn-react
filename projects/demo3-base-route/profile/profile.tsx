import React from 'react';
import './profile.scss';

export interface IProfileProps {
  username: string;
}
export interface IProfileState {

}
export class Profile extends React.Component<IProfileProps, IProfileState> implements React.ComponentLifecycle<IProfileProps, IProfileState>{
  constructor(props: IProfileProps, state: IProfileState) {
    super(props, state);
  }
  render() {
    return (
      <div>props username: {this.props.username}</div>
    );
  }
  componentDidMount() {

  }
}
