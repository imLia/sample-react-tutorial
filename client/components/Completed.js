import React, { Component } from 'react';

export default class Completed extends Component{
  render(){
    return(
      <tbody>
          {this.props.completedItems.map((item, i) => (
            <tr className="text-center text-muted">
              <span key={i} index={i}>{item}</span>
            </tr>
          ))}
      </tbody>
    )
  }
}
