import React, { Component } from 'react'

export default class UserInterface extends Component {

    handleClickLogout = ()=> window.location.assign('/')
    render() {
        return (

            <div>
                <h1>welcome to your interface</h1>
                <button onClick ={this.handleClickLogout}>log-out</button>
            </div>
            
        )
    }
}
