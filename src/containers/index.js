import React, { Component } from "react";

import * as ACTION_TYPES from '../store/actions/actions.types';
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux';

class Container extends Component {
  render() {
    const text = "text 1"
    return (
      <div>
        <button onClick={() => console.log(this.props)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
        <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>
        <button onClick={() => this.props.action_creator3(text)}>Dispatch Action Creator 3</button>
        {this.props.userText && <h1>{this.props.userText}</h1>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1,
    userText: state.userText,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.userInput(text)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
