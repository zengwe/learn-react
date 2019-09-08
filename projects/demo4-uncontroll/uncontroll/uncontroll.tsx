import React from 'react';
import './uncontroll.scss';
export interface IUncontrollProps {}
export interface IUncontrollState {}
export class Uncontroll extends React.Component<IUncontrollProps, IUncontrollState> {
  username: React.RefObject<HTMLInputElement>;
  constructor(props: IUncontrollProps, state: IUncontrollState) {
    super(props, state);
    this.username = React.createRef<HTMLInputElement>();
  }
  render() {
    return (
      <div>
        <div>
          username:<input type="text" ref={this.username}/>
        </div>
      </div>
    );
  }
}
