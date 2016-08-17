import React, { Component } from 'react';


export default class App extends Component{
  render(){
    const style={
      center: {
        textAlign:'center'
      }
    };
    return(
      <div style={style.center}>
        <h1>User Details</h1>
        <input type="text" placeholder="Your Name"  />
        <br />
        <br />
        <input type="text" placeholder="Age"/>
      </div>
    )
  }
}
