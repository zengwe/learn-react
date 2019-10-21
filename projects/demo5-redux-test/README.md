# redux 初步学习
代码：[github-learn-react](https://github.com/zengwe/learn-react)
## 创建reduce
```jsx
const counterReducer = function(state: any = {count: 1}, action: any) {
  switch(action.type){
    case 'COUNT_ADD':
      return {...state, count: state.count + 1};
    default: 
      return state;
  }
}
```
state初始设置为{count：1}
多个reducer可以合并成一个
```typescript
const rootReducers = combineReducers({
  counter: counterReducer,
  post: postReducer
});
```
## 创建store
```typescript
const store = createStore(
  rootReducers
);
```
## 使用
```typescript
store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
});
```
## 有异步代码时需要使用redux-thunk
```typescript
import thunk from 'redux-thunk';
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(), // redux-devtools 插件的使用
  )
);
```
