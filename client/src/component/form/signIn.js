import React, { Component } from 'react';
import axios from 'axios'
import './form.css'

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();    
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:8081/api/auth/login', newUser)
      .then(res => {
        console.log(res.data);
        alert(res.data.message);
        if(res.data.message==='welcome'){
          window.location.assign('/mainpage')
        }else{
          window.location.reload()
        }
      });
  }


  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="form sign-in">

        <h1>Login</h1>

        <div className="insideForm">
          <label >Email</label>
          <input name="email" type="email" placeholder="please enter your email" onChange={this.handleOnChange} value={this.state.email} />

          <label>Password</label>
          <input name="password" type="password" placeholder="enter your password" onChange={this.handleOnChange} value={this.state.password} />
          </div>
          <button type="submit">Submit</button>
        
      </form>
    )
  }
};