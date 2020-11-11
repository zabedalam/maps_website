import React from 'react'
import ZabedPic from "../../assets/pics/zabed_pic.jpg";
import MemberCard from './MemberCard';
import {Container,Row} from "react-bootstrap"

function Members() {
    return (
        <>
         <Container>
        <Row className="d-flex  m-5">
          <MemberCard
            pic={ZabedPic}
            title="Web Developer"
            name="Zabedul Alam"
            description="We care business logic for you"
          />

          <MemberCard
            pic={ZabedPic}
            title="IT Supporter"
            name="Zabedul Alam"

            description="We are dedicated to support 24/7"
          />

          <MemberCard
            pic={ZabedPic}
            title="Digital Marketing Specialist"
            name="Zabedul Alam"

            description="We ensure to reach the right consumer"
          />
        </Row>
      </Container>   
        </>
    )
}

export default Members
