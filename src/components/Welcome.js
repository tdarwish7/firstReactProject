import React, { Component } from 'react'
class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  handleClick(change) {
    let {counter} = this.state
    this.setState({counter: counter + change})
  }
  render() {
    let { name } = this.props
    let { counter } = this.state
    return (
      <>
        <h1>Hello, {name}</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => this.handleClick(5)}>
          Increase 5
        </button>
        <button onClick={() => this.handleClick(2)}>
          Increase 2
        </button>
        <button onClick={() => this.handleClick(1)}>
          Increase 1
        </button>
      </>
    )
  }
}
export default Welcome