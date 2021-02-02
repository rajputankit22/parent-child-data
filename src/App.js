import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Child from "./child";

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      title: "Button"
    }
  }

  chnageCounter(e, name) {
    console.log("Event", e)
    console.log("Name", name)
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          <Child changeCount={this.chnageCounter.bind(this)} title={this.state.title} count={this.state.count} />
        </header>
      </div>
    );
  }
}

export default App;
