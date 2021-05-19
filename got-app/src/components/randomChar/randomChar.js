import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

//a component reflects logic
class randomChar extends Component {
  constructor() {
    super();
    this.updateChar();
  }

  gotService = new gotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  updateChar() {
    const id = Math.floor(Math.random() * 140 + 25);

    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

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