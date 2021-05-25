import React, { Component } from "react";
import "./itemList.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import gotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage";

class itemList extends Component {
  gotService = new gotService();

  state = {
    charList: null,
    error: false,
  };

  componentDidMount() {
    this.gotService
      .getAllCharacters()
      .then((charList) => {
        this.setState({
          charList,
        });
      })
      .catch(() => {
        this.onError();
      });
  }

  componentDidCatch() {
    this.setState({
      charList: null,
      error: true,
    });
  }

  onError() {
    this.setState({
      charList: null,
      error: true,
    });
  }
  // create array of characters
  renderItems(arr) {
    return arr.map((item) => {
      const { id, name } = item;
      return (
        <ListGroupItem key={id} onClick={() => this.props.onCharSelected(id)}>
          {name}
        </ListGroupItem>
      );
    });
  }

  render() {
    const { charList, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }
    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ListGroup className="item-list">{items}</ListGroup>;
  }
}

export default itemList;
