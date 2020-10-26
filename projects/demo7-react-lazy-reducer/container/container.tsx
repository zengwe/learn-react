import React from 'react';
import './container.scss';
const { LazyReducer } = require('lazy-reducer');
console.log(LazyReducer)
// import {} from 'lazy-reducer';
export interface IContainerProps {

}
export interface IContainerState {

}
export class ContainerTemp extends React.Component<IContainerProps, IContainerState> {
  // constructor(props: IContainerProps, state: IContainerState) {
  //   super(props, state);
  // }
  render() {
    return (
      <div>container works!</div>
    );
  }
}
export class Container extends React.Component<IContainerProps, IContainerState>{
  render() {
    return (
      // <LazyReducer reducers={(done: any) => {
      //   import('./container.reducer').then((reducer) => {
      //     console.log(reducer)
      //     done({
      //         containerReducer: reducer
      //     })
      //   })
      // }}>
        <ContainerTemp></ContainerTemp>
      // </LazyReducer>
    );
  }
}
