import React, { Component } from 'react';
import TodoButtons from './TodoButtons';

export default class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      editingMode: false
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.editMode = this.editMode.bind(this);
    this.saveMode = this.saveMode.bind(this);
  }
  onEdit(){
    this.setState({
      editingMode: true
    });
  }
  onSave(){
    this.setState({
      editingMode: false
    });
  }
  editMode(){
    return(
      <ul className="list-group">
          <li className="list-group-item">
            {this.props.children}
            <button type="button" onClick={this.onEdit}>Edit</button>
          </li>
      </ul>
    );
  }
  saveMode(){
    return(
      <ul className="list-group">
          <li className="list-group-item">
            <input type="text" defaultValue={this.props.children} style={{marginRight:"50%"}}/>
            <button type="button" onClick={this.onSave}>Save</button>
          </li>
      </ul>
    )
  }
  render(){
    if(this.state.editingMode){
      return this.saveMode();
    }
    else {
      return this.editMode();
    }
  }
}
