# 路由

## 安装
```bash
zengwe$ npm install react-router-dom --save
zengwe$ npm install @types/react-router-dom --save-dev
```
> 用的typescript所安装@types/react-router-dom

## 使用
```tsx
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { User } from './user/user';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Home } from './home/Home';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="router-outlet">
          <Router basename={'/zengwe'}>
            <div className="nav">
              <NavLink className="link" to="/">Home</NavLink>
              <NavLink className="link" to="/user">user</NavLink>
              <NavLink className="link" to="/login">login</NavLink>
              <NavLink className="link" to="/profile">profile</NavLink>
            </div>
            <Switch>
              <Route path="/" component={Home} exact={true}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/profile" component={Profile}></Route>              
            </Switch>
          </Router>
        </div>
      </div>
    );    
  }
}
export default App;
```
### Router
```typescript
export interface BrowserRouterProps {
    basename?: string;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
    forceRefresh?: boolean;
    keyLength?: number;
}
```
basename 为路由的根路由
### NavLink
```typescript
export interface NavLinkProps<S = H.LocationState> extends LinkProps<S> {
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  exact?: boolean;
  strict?: boolean;
  isActive?<Params extends { [K in keyof Params]?: string }>(
    match: match<Params>,
    location: H.Location<S>,
  ): boolean;
  location?: H.Location<S>;
}
```
NavLink和Link的区别为Navlink配置更丰富，可设置当To和Url一致时定义添加class和style，默认一致时添加class为active
且NavLink必须在BrowserRouter的包裹中

### Switch
让路由匹配到以后就不在往下匹配了，所以只有一条路由被显示
### Route
```typescript
export interface RouteProps {
  location?: H.Location;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}
```
- path为路由
- component 匹配路由时显示的组件
- exact默认false表示不严格匹配，如'/'这个路由可匹配'/'和'/user'，当设置为true时'/'只匹配'/'而不匹配'/user/

### 路由传参

#### this.props.match或history时报错
```bash
zengwe$ npm install --save-dev @types/react-router
```
定义props的结构时
```typescript
export interface IUserProps extends RouteComponentProps<{name: string}>{}
export interface IUserState {}
export class User extends React.Component<IUserProps, IUserState> {
  render() {
    return (
      <div>param.name:{this.props.match.params.name}</div>
    );
  }
}
```
RouteComponentProps 的定义为
```typescript
export interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext, S = H.LocationState> {
  history: H.History;
  location: H.Location<S>;
  match: match<Params>;
  staticContext?: C;
}
```
#### 通过param传参/user/:name
```tsx
<NavLink className="link" to="/user/zengwe">user has name</NavLink>
<Route path="/user/:name" component={User}></Route>
```
在组件中使用
```tsx
<div>param.name:{this.props.match.params.name}</div>
```
> 优势：刷新地址栏，参数依然存在
> 缺点: 只能传字符串，并且，如果传的值太多的话，url会变得长而丑陋。

#### 通过state传参
```tsx
<NavLink className="link" to={{pathname: '/user', state:{age: 18}}}>user2</NavLink>
```
使用
```tsx
<div>query.age:{this.props.location.state.age}</div>
```
> 优势：传参优雅，传递参数可传对象；
> 缺点：刷新地址栏，参数丢失

#### 使用search
```tsx
<NavLink className="link" to='/user?gender=1'>user2</NavLink>
```
> 优势： 刷新地址栏，参数依然存在
> 缺点: 只能传字符串，并且，如果传的值太多的话，url会变得长而丑陋。且需要解析

