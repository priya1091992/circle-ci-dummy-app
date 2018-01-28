import React from "react"
import {render} from "react-dom"

import FirstChild from "./firstChild.js"
import SecondChild from "./secondChild.js"

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todoList: [],
      value:""
    }
    console.log("Parent constructor")
  }
  componentWillMount() {
    console.log("Parent willMount")
  }
  componentDidMount() {
    console.log("Parent didMount")
  }
  componentWillReceiveProps() {
    console.log("Parent willReceiveProps")
  }
  componentWillUpdate() {
    console.log("Parent willUpdate")
  }
  shouldComponentUpdate() {
    console.log("Parent shouldUpdate")
    return true
  }
  componentDidUpdate() {
    console.log("Parent didUpdate")
  }
  componentWillUnmount() {
    console.log("Parent willUnMount")
  }
  inputValue (event) {
    this.setState({
      value: event.target.value
    })
  }
  addList () {
    this.setState({
       todoList: [...this.state.todoList, this.state.value],
       value: ""
    })
  }
  render () {
    return (
      <div className="container">
        <h1>LIST:</h1>
        <span>
          <label> Enter value: </label>
          <input onChange={(ev) => this.inputValue(ev)} value={this.state.value}/>
          <FirstChild addList={() => this.addList()}/>
        </span>
        <hr/>
        <SecondChild list={this.state.todoList}/>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"))
