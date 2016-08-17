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
        <h1>User Info</h1>
        <input type="text" placeholder="Your Name" value={this.props.userinfo.name} onChange = {this.props.onHandleTextNameChange}/>
        <br />
        <br />
        <input type="text" placeholder="Age" value={this.props.userinfo.age} onChange = {this.props.onHandleTextAgeChange}/>
      </div>
    )
  }
}
