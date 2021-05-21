import React, { Component } from "react";
import { Col, Row, Container, ButtonToggle } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharDetails from "../charDetails";
import ItemList from "../itemList";

// import "./app.css";
class App extends Component {
  state = {
    showRandomChar: true,
  };

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };
  render() {
    const char = this.state.showRandomChar ? <RandomChar /> : null;
    return (
      <>
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
          <Row>
            <Col>
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
