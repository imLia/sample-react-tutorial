import React, { Component } from 'react';

export default class TodoAddBox extends Component{
  render(){
    return(
      <div className="col-md-4">
        <label>Task Input</label>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Task.." value = {this.props.item} onChange = {this.props.onTextChange} style={{marginRight: '10px'}}/>
              <br/>
              <div className="text-right">
                <button type="button" className="btn btn-success" onClick = {this.props.addButton}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
