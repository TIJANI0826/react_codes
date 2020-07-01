import React from 'react'

// function Joke(props){
//     if (props.question === null){

//     }
//     return(
//         <div className="todo-item">
//             <p style={{ display: !props.question && 'none'}}>Question: {props.question} </p>
//             <p style={{ display: !props.question && 'none'}}> Punchline: {props.punchline}</p>
//         </div>
//     )
// }
class Joke extends React.Component{
    render(){
        return(
            <div className="todo-item">
                <p style={{ display: !this.props.question && 'none'}}>Question: {this.props.question} </p>
                <p style={{ display: !this.props.question && 'none'}}> Punchline: {this.props.punchline}</p>
            </div>
        )
    }
}
export default Joke;