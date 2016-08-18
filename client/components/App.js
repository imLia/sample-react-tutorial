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
      todoList: ['item1', 'item2']
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.addButton = this.addButton.bind(this);
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
  render(){
    // console.log(this.state.todoList);
    return(
      <div className="row" style={{marginTop: '50px'}}>
        <TodoAddBox onTextChange={this.onTextChange} addButton={this.addButton} item={this.state.item}/>
        <div className="col-md-6 col-md-offset-3 jumbotron  listContainer">
          <TodoList todoList={this.state.todoList}/>
          <TodoButtons />
        </div>
      </div>
    )
  }
}
