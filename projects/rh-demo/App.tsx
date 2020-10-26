import React from 'react';
import {} from 'react-router';
import { } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { Demo1 } from './components/demo1';
import { Demo2 } from './components/demo2';

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <p>
              hellow world by zengwe;
            </p>
          </header>
          <div className="content">
            <Demo1 />
            <Demo2 name=""/>
          </div>
        </div>
      </Provider>

    );    
  }
}
export default App;
