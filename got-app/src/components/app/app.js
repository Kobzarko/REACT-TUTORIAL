import React, { Component } from "react";
import { Col, Row, Container, ButtonToggle } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharDetails from "../charDetails";
import ItemList from "../itemList";
import characterPage from "../characterPage/characterPage";
// import "./app.css";
class App extends Component {
  state = {
    showRandomChar: true,
    selectedChar: 25,
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
          <characterPage />
        </Container>
      </>
    );
  }
}

export default App;
