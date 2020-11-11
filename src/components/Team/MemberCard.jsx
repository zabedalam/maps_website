import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Card, CardImg, Col, Container, Row,CardTitle,CardBody,CardText,CardSubtitle } from "reactstrap";
import Socials from "./Socials"
function MemberCard({pic,title,description,name}) {
  return (
    <>
      <Container>
        {/* <Row className="teamHead">
          <h2>Meet the teams</h2>
        </Row> */}
        <Row className="d-flex">
          <Col sm={12} md={3} lg={3} className="d-flex">
            <Card sm={12} md={3} lg={3} className="d-flex justify-content-center align-items-center flex-column text-center">
              <CardImg src={pic} className="img-fluid rounded-circle w-50 mb-3"/>
              <CardBody>
  <CardTitle>{title}</CardTitle>
  <CardSubtitle>{name}</CardSubtitle>
  <CardText>{description}</CardText>
  <Socials/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MemberCard;
