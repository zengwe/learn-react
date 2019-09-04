import React from 'react';
import './user.scss';
import { RouteComponentProps } from 'react-router';

export interface IUserProps extends RouteComponentProps<{name: string}, {}, {age: number}>{

}
export interface IUserState {

}
export class User extends React.Component<IUserProps, IUserState> {
  constructor(props: IUserProps, state: IUserState) {
    super(props, state);
  }
  render() {
    console.log(this);
    let name,age,gender;
    try {
      name = this.props.match.params.name
    } catch (error) {
      
    }
    try {
      age = this.props.location.state.age
    } catch (error) {
      
    }
    return (
      <div>
        <div>param.name:{name}</div>
        <div>query.age:{age}</div>
      </div>
    );
  }
}
