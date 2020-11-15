import React from 'react'
import { Container } from 'react-bootstrap'
import ContactWrap from './ContactWrap'
import ContactOverlay from './ContactOverlay'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import Footer from './Footer'

function Contact() {
    return (
        <div className="contact">
           <ContactOverlay/>
           <h2>Contact with us</h2>
           <Container>
           <ContactInfo/>
           <ContactForm/>
           </Container>
           <ContactWrap/>
           <Footer/>

        </div>
    )
}

export default Contact
