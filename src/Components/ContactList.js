import React from "react";
import "./ContactList.css";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <div>
      <div>
        <h2 className="title">Contact List</h2>
      </div>
      {renderContactList}
    </div>
  );
};

export default ContactList;
