import React from 'react';
import './App.scss';
import { createStore, combineReducers,compose, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const counterReducer = function(state: any = {count: 1}, action: any) {
  console.log(action);
  switch(action.type){
    case 'COUNT_ADD':
      return {...state, count: state.count + 1};
    default: 
      return state;
  }
}
const postReducer = function(state: any = {list: [{title: 'hellow'}]}, action: any) {
  switch(action.type){
    case 'LOAD_POSTS': 
      return {
        ...state, list: action.payload
      }
  }
  return state;
}
// 合并reducer
const rootReducers = combineReducers({
  counter: counterReducer,
  post: postReducer
});
// const store = createStore(counterReducer);
// const store = createStore(rootReducers);
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk])
  )
);
console.log(store);
console.log(store.getState());
store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
});
console.log(store.getState());
console.log(axios);
axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
  console.log(res);
});
(store).dispatch<any>(async (dispatch: any) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: 'LOAD_POSTS',
    payload: res.data
  });
  console.log(store.getState());
});
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
