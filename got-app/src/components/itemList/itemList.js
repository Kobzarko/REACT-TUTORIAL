import React, { Component } from "react";
import "./itemList.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage";
import PropTypes from "prop-types";
class ItemList extends Component {
  state = {
    itemList: null,
    // error: false,
  };

  // default props
  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
    // getData: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidMount() {
    // get props from characterPage
    const { getData } = this.props;
    // here we receive data from gotService
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
    // .catch(() => {
    //   this.onError();
    // });
  }

  componentDidCatch() {
    this.setState({
      itemList: null,
      error: true,
    });
  }

  onError() {
    this.setState({
      itemList: null,
      error: true,
    });
  }
  // create array of characters
  renderItems(arr) {
    return arr.map((item, index) => {
      // const { id } = item;
      // from parent characterPage receive renderItem={(item) => item.name}
      const label = this.props.renderItem(item);
      return (
        <ListGroupItem
          key={index}
          onClick={() => this.props.onItemSelected(index)}
        >
          {label}
        </ListGroupItem>
      );
    });
  }

  render() {
    const { itemList, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }
    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ListGroup className="item-list">{items}</ListGroup>;
  }
}

export default ItemList;
