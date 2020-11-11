import React from 'react'
import ZabedPic from "../../assets/pics/zabed_pic.jpg";
import MemberCard from './MemberCard';
import {Container,Row,Col} from "react-bootstrap"

function Members() {
    return (
        <>
         <Container>
          <Col md={12} className="headerTitle">
          <h2>Meet the teams</h2>
        </Col> 
             <Row  sm={12} md={6} lg={4} className="d-flex justify-content-between align-items-center mb-5"
        >
        {/* <Col className="d-flex justify-content-between align-items-center" */}
        
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
        {/* </Col> */}
        </Row>
      </Container>   
        </>
    )
}

export default Members
