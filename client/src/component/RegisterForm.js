import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postAdminUser } from "../helper/axiosHelper";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmpassword) {
      return Alert("password and confirm password don not match");
    }
    const { status, message } = await postAdminUser(form);
    toast[status](message);
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
        <Form.Group className="mb-3 " controlId="formGroupPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            placeholder=" Enter your Password"
            required
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <hr />
        <div className="text-end">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
