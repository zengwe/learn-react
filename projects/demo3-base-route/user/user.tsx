import React from 'react';
import './user.scss';

export interface IUserProps {

}
export interface IUserState {

}
export class User extends React.Component<IUserProps, IUserState> {
  constructor(props: IUserProps, state: IUserState) {
    super(props, state);
  }
  render() {
    return (
      <div>user works!</div>
    );
  }
}
