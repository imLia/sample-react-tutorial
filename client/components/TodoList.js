import React, { Component } from 'react';
import TodoButtons from './TodoButtons';

export default class TodoList extends Component{
  render(){
    return(
      <ul className="list-group">
      {this.props.todoList.map((item, index) => (
        <li className="list-group-item" key={index}><input type="checkbox" /> {item}</li>
        ))}
      </ul>
    )
  }
}
