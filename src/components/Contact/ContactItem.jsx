import React from "react";

function ContactItem({ contactIcon, contactSub, contactSubTwo, contactTitle }) {
  return (
    <div className="contactItem">
      <img src={contactIcon} alt="icon" />
      <div className="contactInfo">
        <h4>{contactTitle}</h4>
        <p>{contactSub}</p>
        <p>{contactSubTwo}</p>
      </div>
    </div>
  );
}

export default ContactItem;
