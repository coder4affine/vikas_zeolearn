import React, { Component } from "react";
import PropTypes from "prop-types";
import Xyz from "./Todos";

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  };

  // state = {
  //   a: 1,
  //   greet: this.props.text,
  //   show: false
  // };

  // constructor(props) {
  //   super(props);
  //   const b = 1;
  //   this.state = {
  //     a: 1,
  //     greet: `${props.text}${b}`
  //   };
  // }

  // static getDerivedStateFromProps(props, state) {
  //   const b = 1;
  //   return { ...state, greet: `${props.text}${b}` };
  // }

  render() {
    // const { a, greet, show } = this.state;

    return (
      <div>
        <Xyz />
        {/* <p> {`Hello${this.state.a}`}</p>
        {show && <p> {greet}</p>}
        <button onClick={() => this.setState({ a: a + 1 })}>Click Me</button>
        <button
          onClick={() => {
            this.setState({ show: !show });
          }}
        >
          Show Text
        </button> */}
      </div>
    );
  }
}