import React, { Component } from "react";
import "./itemList.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage";
import PropTypes from "prop-types";
import gotService from "../../services/gotServices";
class ItemList extends Component {
  // default props
  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
    // getData: PropTypes.arrayOf(PropTypes.object),
  };

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
    const { data } = this.props;

    const items = this.renderItems(data);

    return <ListGroup className="item-list">{items}</ListGroup>;
  }
}

// export default ItemList;

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      // error: false,
    };

    componentDidMount() {
      // get props from characterPage
      // const { getData } = this.props;
      // here we receive data from gotService
      getData().then((data) => {
        this.setState({
          data,
        });
      });
      // .catch(() => {
      //   this.onError();
      // });
    }
    render() {
      const { data, error } = this.state;
      if (error) {
        return <ErrorMessage />;
      }
      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};
const { getAllCharacters } = new gotService();
export default withData(ItemList, getAllCharacters);
