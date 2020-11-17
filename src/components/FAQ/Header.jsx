import React from "react";
import { Container, Row, Col } from "reactstrap";

function Header() {
  return (
    <>
      <Row className="m-5">
        <Col>
          <Container className="text-center">
            <h3 className="headerTitle">FAQ</h3>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Header;
