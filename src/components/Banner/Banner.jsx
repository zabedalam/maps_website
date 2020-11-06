import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import Logo from "../../assets/pics/logo.png";
import BurgerMenu from "../../assets/pics/BurgerMenu.png";
import Menu from "../Navbar/Navbar";
import {Link} from "react-router-dom"
import * as FaIcons from "react-icons/fa"



export default function Banner() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
     setSidebar(!sidebar);
   };
  return (
    <>
      <Container fluid id="jumbo">
        <Row id="logoRow">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div id="btnLoginRow">
            {sidebar?(<Menu setSidebar={setSidebar}/>):( <div className="navbar">
          <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={()=>{setSidebar(true)}}/>
          </Link>
          </div>
)
                          

            }

            {/* <h1>Burger Menu</h1> */}
            {/* <img
              className="btnLogin"
              src={BurgerMenu}
              onClick={() => setSidebar(!sidebar)}
              alt="burgerMenu"
            /> */}
            {/* <a href="#" className="close"></a> */}
            {/* {sidebar === true?(
            <Menu show={sidebar} showSidebar={showSidebar}/>):null} */}
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
        <Row className="appBtn">{/* <button>Contact us</button> */}</Row>
      </Container>
    </>
  );
}
