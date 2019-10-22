# react-redux的使用
代码：[github-learn-react](https://github.com/zengwe/learn-react)
## 分别存放action和reducer
如postReducer
```typescript
export const postReducer = function (state: any = { list: [{ title: 'hellow', id: -1 }] }, action: any) {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state, list: action.payload
      }
    case 'CLEAR_POSTS':
      return {
        ...state, list: action.payload
      }
  }

  return state;
}
```
post的action
```typescript
import axios from 'axios';
export const loadPostsAction = (dispatch: any) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
        dispatch({
            type: 'LOAD_POSTS',
            payload: res.data
        });
    });
}
export const clearPostList = (dispatch: any) => {
    dispatch({
        type: 'CLEAR_POSTS',
        payload: []
    })
}
```
## 创建store并合并一些中间键
```typescript
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {RootReducer }  from './reducers/root.reducer';
export const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(...[thunk]),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    )
);
```
> 用到了异步所以加了thunk
> (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    )这个添加浏览器插件[reduxDevtools](https://github.com/zalmoxisus/redux-devtools-extension)
## 通过react-redux把redux和react结合
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
serviceWorker.unregister();
```
## 在组件中使用
```tsx
import React from 'react';
import { connect } from 'react-redux';
import { loadPostsAction, clearPostList } from '../store/actions/post.action';
class PostListComponentsd extends React.Component<any, any> {
    componentDidMount() {
        this.props.load()
    }
    render() {
        const { list } = this.props.post;
        let post = list.map((item: any) => {
            return (<li key={item.id}>{item.title}</li>)
        });
        return (
            <div>
                <div>
                    <button onClick={this.props.clear}>清除</button>
                    <button onClick={this.props.load}>加载</button>
                </div>
                <ul>
                    {post}
                </ul>
            </div>
        ) 
    }
};
const mapStateToProps = (state: any, ownProps: any) => {
    console.log(state)
    return {
        post: state.post
    }
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        clear: () => dispatch(clearPostList),
        load: () => dispatch(loadPostsAction)
    }
}
const mergeProps = (...param: any) => {
    return Object.assign({}, ...param);
}
export const PostListComponents = connect(mapStateToProps, mapDispatchToProps, mergeProps)(PostListComponentsd);
```
connect的定义
```typescript
    function connect(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
        options?: Options<State, TStateProps, TOwnProps, TMergedProps>        
    ){}
```
mapStateToProps: 作用是将组件内部的state和组件的props合并,但是其实这个state就是store的数据，可能是做一些简化处理
mapDispatchToProps: 将dispatch的操作合并到props中
mergeProps：可选参数控制如何合并 const mergeProps = (...param: any) => {
    return Object.assign({}, ...param);
}直接合并，和输这个参数的结果一样
options:不详
