import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Card, CardImg, Col, Container, Row,CardTitle,CardBody,CardText,CardSubtitle } from "reactstrap";
import Socials from "./Socials"
function MemberCard({pic,title,description,name}) {
  return (
    <>
    <Container className="cardStyle">
      {/* <Col className="d-flex justify-content-center align-items-center flex-column text-center"
      sm={12}
      md={3}
      lg={3}> */}
        {/* <Row className="teamHead">
          <h2>Meet the teams</h2>
        </Row> */}
        {/* <Row> */}
          {/* <Col sm={12} md={3} lg={3} className="d-flex"> */}
            <Card  className="align-items-center mb-5 cardStyleBody " style={{boxShadow:"3px 3px 3px 3px #9E9E9E"}} >
              <CardImg src={pic}  className="img-fluid rounded-circle w-50 mb-3"/>
              <CardBody>
  <CardTitle>{name}</CardTitle>
  <CardSubtitle>{title}</CardSubtitle>
  
  {/* <CardText>{description}</CardText> */}
  <Socials/>
              </CardBody>
            </Card>
          {/* </Col> */}
        {/* </Row> */}
      {/* </Col> */}
      </Container>
    </>
  );
}

export default MemberCard;
