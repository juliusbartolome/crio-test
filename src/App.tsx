import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMousePointer, faSquare, faSlidersH, faPen } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'reactstrap';

import Canvas from "./components/Canvas";

import './App.css';

library.add(faMousePointer, faSquare, faSlidersH, faPen);

class App extends Component {
  render() {
    return (
      <Container className="app" fluid>
        <Row>
          <Col md="12" className="col">
            <Canvas />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
