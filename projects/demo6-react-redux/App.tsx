import React from 'react';
import './App.scss';
import { PostListComponents } from './components/post-list.components'
class App extends React.Component {
  constructor(props: any, state: any) {
    super(props, state);
    console.log(this)
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              hellow world dby zengwe;
            </p>
          </header>
          <div>post list</div>
          <div><PostListComponents name="zengwe"></PostListComponents></div>
        </div>        
    );    
  }
}
export default App;
