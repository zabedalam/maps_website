import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import WebDevelopment from "../../assets/pics/development.png"
import ItSupporrt from "../../assets/pics/itsupport.png"
import DigitalMarketing from "../../assets/pics/digitalmarketing.png"


const GoalTitle = (props) => {
  return (
    <Col md={12} className="headerTitle">
      <span>Our Services</span>
    </Col>
  );
};

const GoalCaption = (props) => {
  return (
    <Col md={12} className="captionTitle">
      <span>We are technically sounds to develiver in time</span>
    </Col>
  );
};

const Feature = (props) => {
    let text="Read more >"
  return (
    <Col
      className="feature d-flex justify-content-center align-items-center flex-column text-center"
      sm={12}
      md={3}
      lg={3}
    >
      <Image src={props.icon} rounded fluid className="mb-5" style={{ width: "35%" }} />
  <span>{props.title}</span>
      <p className="captionTitle">{props.description}</p>
  <Button>{text}</Button>
    </Col>
  );
};

function Services() {
  return (
    <>
      <Row className="justify-content-center">
        <GoalTitle></GoalTitle>
        <GoalCaption></GoalCaption>
      </Row>
      <Container>
        <Row className="d-flex justify-content-between align-items-center m-5">
          <Feature
            icon={WebDevelopment}
            title="Web Development"
            description="We care business logic for you"
          />

          <Feature
            icon={ItSupporrt}
            title="It Support"
            description="We are dedicated to support 24/7"
          />

          <Feature
            icon={DigitalMarketing}
            title="Digital Marketing"
            description="We ensure to reach the right consumer"
          />
        </Row>
      </Container>
    </>
  );
}

export default Services;
