import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 " controlId="formGroupEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="fName"
            placeholder="Enter your First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGroupPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lName"
            placeholder="Enter your Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder=" Enter your Password" />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
