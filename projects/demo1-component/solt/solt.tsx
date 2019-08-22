import React from 'react';
import './solt.scss';

export interface ISoltProps {

}
export interface ISoltState {

}
export class Solt extends React.Component<ISoltProps, ISoltState> {
  constructor(props: ISoltProps, state: ISoltState) {
    super(props, state);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        this is a solt component!
        {this.props.children}
      </div>
    );
  }
}
