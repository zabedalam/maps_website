import React from 'react'
import {Container,Row,Col} from "reactstrap"
import usersImg from "../../assets/pics/users.png"
import Client from './Client'

function Review() {
    return (
        <>
          <Container fluid id="ratingPartnersCont">
              <Row m-0 id="overlayRow">
<Col id="rpItemOne" className="col-md-4 d-none d-sm-none d-md-block d-lg-block d-xl-block">
    <Col className="col-10" id="rpItemTwo">
        <Row id="ratingBox">
            <Col className="col-12" id="star">
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star_half</span>

            </Col>
<Col className="col-12 captionTitle">
    <b>4.7</b>customer satisfaction
</Col>
        </Row>
        <div id="triangle"></div>
        <Row id="usersImgCol">
            <img id="usersImg" src={usersImg} alt="users"/>
        </Row>
    </Col>
</Col>
<Col id="rpItemThree" className="col-md-8">
    <Container>
        {/* <h2>Here will be carosouel</h2> */}
        <Client/>
    </Container>
</Col>
              </Row>
              </Container>  
        </>
    )
}

export default Review
