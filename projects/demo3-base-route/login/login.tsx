import React from 'react';
import './login.scss';

export interface ILoginProps {

}
export interface ILoginState {

}
export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps, state: ILoginState) {
    super(props, state);
  }
  render() {
    return (
      <div>login works!</div>
    );
  }
}
