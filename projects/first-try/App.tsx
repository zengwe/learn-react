import React from 'react';
import './App.scss';
import { Home } from './home/home';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            hellow world by zengwe;
          </p>
          <Home />
        </header>
      </div>
    );    
  }
}
export default App;
