import React from "react";
import { Container, Row } from "reactstrap";
import Logo from "../../assets/pics/mapsLogo.png";
import BurgerMenu from "../../assets/pics/BurgerMenu.png";


export default function Banner() {
  return (
    <>
      <Container fluid id="jumbo">
        <Row id="logoRow">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div id="btnLoginRow">
            {/* <h1>Burger Menu</h1> */}
            <img className="btnLogin" src={BurgerMenu} alt="burgerMenu"/>
          </div>
        </Row>
        <Container>
          <Row>
            <div className="col-12" id="motto">
              <Container>
                <span>We are Digital solutions Provider</span>
              </Container>
            </div>
            <div className="col-12" id="mottoCaption">
              <Container>
                <p>
                  All businesses are unique. Most businesses want more
                  customers. We build websites that help you to promote your
                  product or service so you can grow your business.
                </p>
              </Container>
            </div>
          </Row>
        </Container>
        <Row className="appBtn">
          {/* <button>Contact us</button> */}
        </Row>
      </Container>
    </>
  );
}
