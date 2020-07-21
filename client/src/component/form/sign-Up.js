import React, { Component } from 'react';
import axios from 'axios'
import './form.css'

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:8081/api/auth/signup', newUser)
      .then(res => {
        console.log(res.data)
        alert('inscription')
        window.location.assign('/login')
      });
  }


  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="form signu-up">
        <h1>signup</h1>

        <div className="insideForm">
          <label >Name</label>
          <input name="name" type="text" placeholder="please enter your name" onChange={this.handleOnChange} value={this.state.name} />

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