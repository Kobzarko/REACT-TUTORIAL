import React, { Component } from "react";
import "./charDetails.css";
import gotServices from "../../services/gotServices";
import ErrorMessage from "../errorMessage/errorMessage";
import Spinner from "../spinner/";
export default class CharDetails extends Component {
  gotService = new gotServices();

  //1 instance of object
  state = {
    char: null,
    loading: true,
    error: false,
  };
  // update component
  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }
  //3 create person
  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }

    this.setState({ loading: true });

    this.gotService
      .getCharacter(charId)
      .then(this.onCharDetailsLoaded)
      .catch(() => this.onError());
  }

  onError() {
    this.setState({
      char: null,
      error: true,
    });
  }

  //2 invoke render
  render() {
    if (!this.state.char) {
      return <span className="select-error">Please select a character</span>;
    }

    // if state exist
    const { name, gender, born, died, culture, playedBy } = this.state;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">PlayedBy</span>
            <span>{playedBy}</span>
          </li>
        </ul>
      </div>
    );
  }
}
