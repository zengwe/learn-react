import React from 'react';
import './App.scss';
import { Container } from './container/container';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          123
          <Container></Container>
        </div>
      </div>
    );    
  }
}
export default App;
