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
    this.onRemove = this.onRemove.bind(this);
    this.completed = this.completed.bind(this);
  }
  onEdit(){
    this.setState({
      editingMode: true
    });
  }
  onSave(){
    this.props.updateItemInList(this.refs.newVal.value, this.props.index);
    this.setState({
      editingMode: false
    });
  }
  onRemove(){
    this.props.removeItem(this.props.index);
  }
  completed(){
    this.props.completedItem(this.props.index);
  }
  editMode(){
    return(
        <tbody>
          <tr>
            <th className="text-center"><span onClick={this.onEdit}>{this.props.children}</span></th>
            <th className="text-center"><button type="button" className="btn-sm btn-danger" onClick={this.onRemove}>Remove</button> ||
            <button type="button" className="btn-sm btn-primary" onClick={this.completed}>Complete</button></th>
          </tr>
        </tbody>
    );
  }
  saveMode(){
    return(
      <tbody>
        <tr>
          <th className="text-center"><input type="text" className="form-control" ref="newVal" defaultValue={this.props.children} style={{margin:"0 50% 0 2%"}}/></th>
          <th className="text-center"><button className="btn-sm btn-success" type="button" onClick={this.onSave}>Save</button>||<button className="btn-sm btn-danger" type="button">Cancel</button></th>
        </tr>
      </tbody>
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
