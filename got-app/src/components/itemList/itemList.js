import React, { Component } from "react";
import "./itemList.css";
import { ListGroup, ListGroupItem } from "reactstrap";

class itemList extends Component {
  render() {
    return (
      <ListGroup className="item-list">
        <ListGroupItem>John Snow</ListGroupItem>
        <ListGroupItem>Brandon Stark</ListGroupItem>
        <ListGroupItem>Geremy</ListGroupItem>
      </ListGroup>
    );
  }
}

export default itemList;
