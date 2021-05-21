import React, { Component } from "react";
import "./itemList.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import gotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";

class itemList extends Component {
  gotService = new gotService();

  state = {
    charList: null,
  };

  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({
        charList,
      });
    });
  }

  componentDidCatch(error, info) {
    this.setState({
      charList: null,
    });
  }

  renderItems(arr) {
    return arr.map((item, i) => {
      return <ListGroupItem key={i}>{item.name}</ListGroupItem>;
    });
  }

  render() {
    const { charList } = this.state;

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ListGroup className="item-list">{items}</ListGroup>;
  }
}

export default itemList;
