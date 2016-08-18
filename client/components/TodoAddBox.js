import React, { Component } from 'react';

export default class TodoAddBox extends Component{
  render(){
    return(
      <div className="col-md-6 col-md-offset-3 jumbotron text-center todoContainer">
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter Task.." value = {this.props.item} onChange = {this.props.onTextChange} style={{marginRight: '10px'}}/>
        <button type="button" className="btn btn-success" onClick = {this.props.addButton}>Add</button>
      </div>
    )
  }
}
