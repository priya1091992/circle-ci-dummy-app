import React from "react"
import {render} from "react-dom"

export default class FirstChild extends React.Component {
  constructor (props) {
    super(props);
    console.log("firstChild constructor")
  }
  componentWillMount() {
    console.log("firstChild willMount")
  }
  componentDidMount() {
    console.log("firstChild didMount")
  }
  componentWillUpdate() {
    console.log("firstChild willUpdate")
  }
  componentWillReceiveProps() {
    console.log("firstChild willReceiveProps")
  }
  shouldComponentUpdate() {
    console.log("firstChild shouldUpdate")
    return true
  }
  componentDidUpdate() {
    console.log("firstChild didUpdate")
  }
  componentWillUnmount() {
    console.log("firstChild willUnMount")
  }
  render () {
    return (
      <div className="container">
        <button onClick={this.props.addList}>Add</button>
      </div>
    );
  }
}
