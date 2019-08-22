import React from 'react';
import './App.scss';
import { ParentToChild } from './parent-to-child/parent-to-child';
import { ChildToParent } from './child-to-parent/child-to-parent';
import { CrossGrade } from './cross-grade/cross-grade';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="parent-to-child">
          <ParentToChild />
        </div>
        <div className="child-to-parent">
          <ChildToParent></ChildToParent>
        </div>
        <div className="cross-grade">
          <CrossGrade />
        </div>
      </div>
    );    
  }
}
export default App;
