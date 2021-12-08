import React, { Component } from "react";

import * as ACTION_TYPES from '../store/actions/actions.types';
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux';

class Container extends Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
