import React from 'react';
import './App.scss';
import { Controll } from './controll/controll';
import { Uncontroll } from './uncontroll/uncontroll';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="controll">
          <div className="title">controll</div>
          <div>
            <Controll></Controll>
          </div>
        </div>
        <div className="uncontroll">
          <div className="title">uncontroll</div>
          <div>
            <Uncontroll></Uncontroll>
          </div>
        </div>
      </div>
    );    
  }
}
export default App;
