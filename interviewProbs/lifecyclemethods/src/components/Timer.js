import React, { Component } from 'react'

export default class Timer extends Component {
constructor(props) {
super(props);
this.state = {favoriteColor: "red"}
}
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      </div>
    )
  }
}
