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
