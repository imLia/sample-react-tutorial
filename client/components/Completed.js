import React, { Component } from 'react';

export default class Completed extends Component{
  render(){
    return(
      <div className="col-md-12">
        {this.props.completedItems.map((item, i) => (
          <h1 className="text-center text-muted" key={i} index={i} >{item}</h1>
        ))}

      </div>
    )
  }
}
