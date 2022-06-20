import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import user from "../Images/img.png";

const ContactCard = (props) => {
  const id = props.contact.id;
  const { name, email, number } = props.contact.contact;
  return (
    <div>
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <img
              style={{ height: "2rem", width: "2rem" }}
              src={user}
              alt="avatar"
            />
            <div className="fw-bold">{name}</div>
            {number}
            <br />
            {email}
          </div>
          <FaTrashAlt
            onClick={() => props.clickHandler(id)}
            style={{ color: "red", height: "3rem", cursor: "pointer" }}
          />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ContactCard;
