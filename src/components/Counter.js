import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment } from "../redux/index";
class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);