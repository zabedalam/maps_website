import React from 'react';
import { Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from "../Banner/Banner"
// import Navbar from "../Navbar/Navbar"
import Services from "../Services/Services"
import Members from "../Team/Members"
import Faq from "../FAQ/Index"
import Contact from "../Contact/Contact"
import Review from "../Testomony/Review"



export default function LandingPage() {
  return (
    <>
    <Container fluid style={{overflowX:"hidden"}}>
{/* <Navbar/> */}
        <Banner/>
<Services/>
<Review/>
<Members/>
<Faq/>
<Contact/>


    </Container>
    
    </>
  );
}
