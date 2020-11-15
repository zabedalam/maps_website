import React from 'react'
import ContactItem from "./ContactItem"
import contactIconOne from "../../assets/pics/img/contactIconOne.webp"
import contactIconTwo from "../../assets/pics/img/contactIconTwo.webp"
import contactIconThree from "../../assets/pics/img/contactIconThree.webp"

function ContactInfo() {
    return (
        <div className="contactInfo">
           <ContactItem
           contactIcon={contactIconOne}
           contactTitle="Address"
           contactSub="49,Gavlhusvej"
           contactSubTwo="Denmark"
           /> 
           <ContactItem
           contactIcon={contactIconTwo}
           contactTitle="Telephone"
           contactSub="004542166756"
           contactSubTwo="004542166756"
           /> 
           <ContactItem
           contactIcon={contactIconThree}
           contactTitle="E-mail"
           contactSub="zabedalam777@gmail.com"
           contactSubTwo="zabedalam777@gmail.com"
           /> 
        </div>
    )
}

export default ContactInfo
