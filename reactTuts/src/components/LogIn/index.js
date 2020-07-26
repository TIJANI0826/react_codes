import React, { Component } from 'react';

class LogIn extends Component{
    constructor(){
        super()
        this.state ={
            isLoggedIn:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((prevState)=>{
          return {
            isLoggedIn: !prevState.isLoggedIn,
          }
        })
      }
    render(){
        let text = this.state.isLoggedIn ? "Login" : "Logout"       
        return(
            <div>
                {this.state.isLoggedIn ? <h1>Logged Out</h1>:<h1>Logged In</h1>}
                <button onClick={this.handleClick}>Click  to {text}</button>
            </div>
                
                    // this.state.isLoggedIn ?
                    // <div><h1> Logged Out</h1>
                    // <button onClick={this.handleClick}> Login</button></div>:
                    // <div><h1>Logged In</h1>
                    // <button onClick={this.handleClick}> Logout</button></div>


                
        )
    }

}
export default LogIn;