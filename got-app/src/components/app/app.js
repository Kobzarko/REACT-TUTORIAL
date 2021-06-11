import React, { Component } from "react";
import { Col, Row, Container, ButtonToggle } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotServices";
import { CharacterPage, BooksPage, HousesPage, BooksItem } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
export default class App extends Component {
  gotService = new gotService();

  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.state({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };

  render() {
    const char = this.state.showRandomChar ? (
      <RandomChar interval={10000} />
    ) : null;
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {char}
                <ButtonToggle
                  color="primary"
                  className="mb-5"
                  // className="toggle-btn"
                  onClick={this.toggleRandomChar}
                >
                  Toggle RandomChar
                </ButtonToggle>
              </Col>
            </Row>
            <Route
              path="/"
              exact
              component={() => <h1>Welcome to GOT DB</h1>}
            />
            <Route path="/characters" exact component={CharacterPage} />
            <Route path="/houses" exact component={HousesPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}
