import React from 'react';
import { Container } from 'reactstrap';
import Banner from "../Banner/Banner"

export default function LandingPage() {
  return (
    <>
    <Container fluid style={{overflowX:"hidden"}}>
        <Banner/>
    </Container>
    </>
  );
}
