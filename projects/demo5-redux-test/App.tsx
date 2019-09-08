import React from 'react';
import './App.scss';
import { createStore, combineReducers,compose, applyMiddleware } from 'redux';


const counterReducer = function(state: any = {count: 1}, action: any) {
  console.log(action);
  switch(action.type){
    case 'COUNT_ADD':
      return {...state, count: state.count + 1};
    default: 
      return state;
  }
}
const store = createStore(counterReducer);
console.log(store);
console.log(store.getState());
store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
});
console.log(store.getState());
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            hellow world by zengwe;
          </p>
        </header>
      </div>
    );    
  }
}
export default App;
// redux 插件 redux devtools
// 用react-thunk来管理redux中的异步操作，store.dispatch((dispatch) => { dispatch({...some})});
