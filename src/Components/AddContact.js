import React from "react";
import { Form, Button } from "react-bootstrap";
import "./AddContact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.number === "" ||
      this.state.email === ""
    ) {
      alert("All fields are mandate!");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", number: "", email: "" });
  };
  render() {
    return (
      <Form className="form" onSubmit={this.add}>
        <h2 className="title">Add Contact</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            value={this.state.number}
            onChange={(e) => this.setState({ number: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}

export default AddContact;
