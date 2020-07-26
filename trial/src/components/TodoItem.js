import React, { Component } from 'react'
import todosData from './todosData';


class TodoItem extends Component{
    constructor(){
        super()
        this.state = {
            completed: true
        }
    }
    render(){
        return(
            <div className="todo-item">
                
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed ? "checked": null}
                    onChange={()=>this.props.handleChange(this.props.item.id)}
                />
                <p 
                    className={this.props.item.completed ? "not-completed" : null} 
                    style={{ color : this.props.item.completed ? "green" : 'blue'}}>
                    {this.props.item.text}
                </p>
            </div>
        )
    }
}


export default TodoItem;
