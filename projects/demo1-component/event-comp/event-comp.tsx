import React from 'react';
import './event-comp.scss';

export interface IEventCompProps {

}
export interface IEventCompState {
  count: number;
  otherCount: number;
}
export class EventComp extends React.Component<IEventCompProps, IEventCompState> {
  public state = { count: 1, otherCount: 1};
  constructor(props: IEventCompProps, state: IEventCompState) {
    super(props, state);
  }
  protected addCount() {
    this.setState({
      count: ++this.state.count
    });
  }
  protected addOtherCount() {
    this.setState((prevState, props) => {
      return(
        {otherCount: ++this.state.otherCount}
      );
    });
  }
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={this.addCount.bind(this)}>增加</button>
        <div>otherCount: {this.state.otherCount}</div>
        <button onClick={this.addOtherCount.bind(this)}>增加otherCount</button>
      </div>
    );
  }
}
