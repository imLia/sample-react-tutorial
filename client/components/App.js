import React, { Component } from 'react';
import { Link } from 'react-router';
import TodoAddBox from './TodoAddBox';
import TodoList from './TodoList';
import TodoButtons from './TodoButtons';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      item: '',
      todoList: ['item1', 'item2'],
      editingMode: false,
      addButton: true
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.addButton = this.addButton.bind(this);
    // this.onEdit = this.onEdit.bind(this);
    // this.onSave = this.onSave.bind(this);
    // this.editMode = this.editMode.bind(this);
    // this.saveMode = this.saveMode.bind(this);
  }

  onTextChange(e){
    this.setState({
      item: e.target.value
    })
    // console.log(this.state.item);
  }

  addButton(){
    let todoList = this.state.todoList;
    todoList.push(this.state.item);
    this.setState({
      todoList: todoList,
      item: ''
    })
    // console.log('Clicked!');
    console.log(this.state.todoList);
  }
  // onEdit(){
  //   this.setState({
  //     editingMode: true
  //   });
  // }
  // onSave(){
  //   let val = this.refs.newVal.value;
  //   console.log("new value" + val);
  //   this.setState({
  //     editingMode: false
  //   });
  // }
  // editMode(){
  //   return(
  //     <ul className="list-group">
  //       {this.state.todoList.map((item, index) => (
  //         <li className="list-group-item" key={index}>
  //           <input type="checkbox"/> <span style={{marginRight:"80%"}}>{item}</span>
  //           <button type="button" onClick={this.onEdit}>Edit</button>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  // saveMode(){
  //   return(
  //     <ul className="list-group">
  //       {this.state.todoList.map((item, index) => (
  //         <li className="list-group-item" key={index}>
  //           <input type="text" value={item} ref="newVal" style={{marginRight:"60%"}}/>
  //           <button type="button" onClick={this.onSave}>Save</button>
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  render(){
    // console.log(this.state.todoList);
    return(
      <div className="row" style={{marginTop: '50px'}}>
        <TodoAddBox onTextChange={this.onTextChange} addButton={this.addButton} item={this.state.item}/>
        <div className="col-md-6 col-md-offset-3 jumbotron  listContainer">
          {this.state.todoList.map((item, index) => (
            <TodoList key={index}>
              {item}
            </TodoList>
          ))}
          <TodoButtons />
        </div>
      </div>
    )
  }
}
