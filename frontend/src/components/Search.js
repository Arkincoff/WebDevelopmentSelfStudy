import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Label>Enter here</Form.Label>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={8}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search"
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search Image
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
