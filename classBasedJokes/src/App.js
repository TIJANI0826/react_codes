import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke';
import JokeData from './jokeData'

// function App(){
//   const JokeComponents = JokeData.map(function(joke){
//     return (<Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)

//   }) 
//   return(
//     <div className="todo-list">
//       {JokeComponents}
//     </div>
//   )
// }

class App extends React.Component{
   JokeComponents = JokeData.map(function(joke){
    return (<Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)

  }) 
  render(){
    const jokeComponents = this.JokeComponents;
    return (
      <div className="todo-list">
        {jokeComponents}
      </div>
    ) 
  }
}
export default App;
