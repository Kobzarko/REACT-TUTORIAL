import React, { Component } from "react";
import { Col, Row, Container, ButtonToggle, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage/";
import ErrorMessage from "../errorMessage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import gotService from "../../services/gotServices";

// import "./app.css";
class App extends Component {
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
    const char = this.state.showRandomChar ? <RandomChar /> : null;
    if (this.state.error) {
      return <ErrorMessage />;
    }
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
          <CharacterPage />
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({ name }) => (
                  <>
                    <span>{name}</span>
                    <Button>Click me</Button>
                  </>
                )}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.SelectedChar} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => item.name}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.SelectedChar} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
