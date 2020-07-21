import React, { Component } from 'react'
import {Link,BrowserRouter,Route, Switch}from 'react-router-dom'
//component
import SignIn from './component/form/signIn';
import SignUp from './component/form/sign-Up';
import UserInterface from './component/mainpage/userInterface';
//css
import './index.css'

 class App extends Component  {      
  render() 
  {
    return (
    <div className="App">
      <BrowserRouter>    
        <nav className="navbar">
          <div>
            <Link to={"/"}> Home </Link>
          </div>
          <div>
            <Link  to={"/login"}> login </Link>
            <Link  to={"/signup"}> signup </Link>
          </div>                                     
        </nav>
        <Switch>
          <Route exact path = "/">
            <h1> Hello everyone </h1>
          </Route>
          <Route path = "/login">
            <SignIn getState={this.getState}/>
          </Route>
          <Route path = "/signup">
            <SignUp/>
          </Route>
          <Route path = "/mainpage">
            <UserInterface/>
          </Route>
        </Switch>                 
      </BrowserRouter>
    </div>
  );
}
}

export default App;
