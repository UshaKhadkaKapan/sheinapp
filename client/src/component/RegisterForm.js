import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <h3>Register Form</h3>
        <hr />
        <Form.Group className="mb-3 " controlId="formGroupEmail">
          <Form.Label>fName</Form.Label>
          <Form.Control
            type="text"
            name="fName"
            placeholder="Enter your First Name"
            required
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGroupPassword">
          <Form.Label>lName</Form.Label>
          <Form.Control
            type="text"
            name="lName"
            placeholder="Enter your Last Name"
            required
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder=" Enter your Password"
            required
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
