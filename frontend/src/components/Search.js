import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form>
            <Form.Row >
              <Col>
                <Form.Label>Enter here</Form.Label>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={8}>
                <Form.Control placeholder="Search" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
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
