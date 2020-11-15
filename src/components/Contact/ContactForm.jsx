import { Button } from 'antd'
import React from 'react'
import BlockButton from "../BlockButton/BlockButton"

function ContactForm() {
    let text="Submit"
    return (
        <div className="contactForm">
            <div>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="E-mail address"/>
            </div>
            <input type="text" placeholder="Message topic"/>
            <textarea placeholder="Your Message" cols="30" rows="6"></textarea>
            <BlockButton
        text={text}
        style={{ margin: "auto" }}
        
      />
        </div>
    )
}

export default ContactForm
