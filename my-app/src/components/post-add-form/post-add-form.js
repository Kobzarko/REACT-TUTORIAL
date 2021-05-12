import React, { Component } from "react";

import "./post-add-form.css";
import { Button } from "reactstrap";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.OnValueChange = this.OnValueChange.bind(this);
  }

  OnValueChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <form className="bottom-panel d-flex ">
        <input
          type="text"
          placeholder="What do you think about?"
          className="from-control new-post-label"
          onChange={this.OnValueChange}
        />
        <Button type="Submit" outline color="secondary">
          Add
        </Button>
      </form>
    );
  }
}
