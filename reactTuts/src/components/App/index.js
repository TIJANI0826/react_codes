import React,{Component, useEffect} from 'react';
import './App.css';
import ChangeState from './changeStatewithButton'
import Lifecycle from '../LifeCycle/Lifecycle';
import LogIn from '../LogIn';


class App extends Component{
  // constructor(){
  //   super()
  //   // this.state ={
  //   //   isLoading:true
  //   // }
  // }
  // // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({
  //       isLoading:false
  //     })
  //   },1000)
  // }

  render(){
    return(
      <div>
        <LogIn/>
      </div>

    )
  }
}

export default App;

