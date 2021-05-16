import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharDetails from "../charDetails";
import ItemList from "../itemList";

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col md="6">
            <RandomChar />
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
};

export default App;
