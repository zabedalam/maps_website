import React from 'react';
import { Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"


export default function LandingPage() {
  return (
    <>
    <Container fluid style={{overflowX:"hidden"}}>
{/* <Navbar/> */}
        <Banner/>
    </Container>
    
    </>
  );
}
