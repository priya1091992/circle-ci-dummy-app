import React from "react"
import {render} from "react-dom"

export default class SecondChild extends React.Component {
  constructor (props) {
    super(props);
    this.state = { allList: props.list }
    console.log("secondChild constructor")
  }
  componentWillMount() {
    console.log("secondChild willMount")
  }
  componentDidMount() {
    console.log("secondChild didMount")
  }
  componentWillReceiveProps(nextProps) {
    console.log("secondChild willReceiveProps")
    this.setState({ allList: nextProps.list })
  }
  componentWillUpdate() {
    console.log("secondChild willUpdate")
  }
  shouldComponentUpdate() {
    console.log("secondChild shouldUpdate")
    return true
  }
  componentDidUpdate() {
    console.log("secondChild didUpdate")
  }
  componentWillUnmount() {
    console.log("secondChild willUnMount")
  }
  render () {
    return (
      <div className="container">
        <hr/>
         { this.state.allList ? this.state.allList.map((list, i) => <h3 key={i}>{list}</h3> ): null}
      </div>
    );
  }
}
