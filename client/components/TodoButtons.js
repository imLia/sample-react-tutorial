import React, { Component } from 'react';

export default class TodoButtons extends Component{
  render(){
    return(
      <div className="text-center">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
    )
  }
}
