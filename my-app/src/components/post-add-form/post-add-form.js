import React, { Component } from "react";

import "./post-add-form.css";
import { Button } from "reactstrap";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.OnValueChange = this.OnValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  OnValueChange(e) {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What do you think about?"
          className="from-control new-post-label"
          onChange={this.OnValueChange}
          value={this.state.text}
        />
        <Button type="Submit" outline color="secondary">
          Add
        </Button>
      </form>
    );
  }
}
