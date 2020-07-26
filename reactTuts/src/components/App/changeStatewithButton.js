import React from 'react'

class ChangeState extends React.Component{
    constructor(){
      super()
      this.state={
        count:0
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick(){
      this.setState((prevState)=>{
        return {
          count: prevState.count + 1
        }
      })
    }
  
    render(){
      return(
        <div>
          <label>current state {this.state.count}</label><br/>
          <button onClick={this.handleClick}>Click to increase</button>
          
        </div>
      )
    }
  }
  
export default ChangeState;