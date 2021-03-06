import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import PropTypes from "prop-types";
//a component reflects logic
class randomChar extends Component {
  gotService = new gotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  //default settings with static
  static defaultProps = {
    interval: PropTypes.number,
  };

  // static propTypes = {
  //   interval: (props, propName, componentName) => {
  //     const value = props[propName];
  //     if (typeof value === "number" && !isNaN(value)) {
  //       return null;
  //     }
  //     return new TypeError(`${componentName}: must to be a number`);
  //   },
  // };
  // method was invoked
  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, this.props.interval);
  }
  //invoke when component was removed
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    // const id = 1345678987654;
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

    // check our connection
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="random-block rounded">
        {spinner}
        {errorMessage}
        {content}
      </div>
    );
  }
}

// a component reflects design
const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          {" "}
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          {" "}
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          {" "}
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};

export default randomChar;
