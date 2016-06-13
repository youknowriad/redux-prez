import React, { Component } from "react";

import Play from "./play";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "2em",
  padding: "2em",
  background: "rgba(255, 255, 255, 0.9)",
  cursor: "pointer"
};

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle() {
    if (!this.state.open) {
      setTimeout(() => {
        this.props.run(this.refs.output);
      });
    }

    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <Play run={!open} toggle={() => this.toggle()} />
        { this.props.children }
        { open ? <div className="preview" ref="output" style={style} /> : null }
      </div>
    );
  }
}

export default Preview;
