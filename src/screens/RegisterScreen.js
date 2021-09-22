import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterScreen = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setCPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {}, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setMessage("Password and Confirm Password Do Not Match!");
    }
  };

  return (
    <div className="loginCard">
      <Form className="loginForm" autoComplete="off" onSubmit={SubmitHandler}>
        <h3 className="text-center font-weight-bold loginText">Register!</h3>

        {message && <Message variant="danger">{message}</Message>}

        <Row className="loginInput">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Prepend className="inputPrep">
                <InputGroup.Text id="basic-addon1">
                  <FaUser />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="First Name..."
                aria-label="FirstName"
                aria-describedby="basic-addon1"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col md={6}>
            <InputGroup>
              <InputGroup.Prepend className="inputPrep">
                <InputGroup.Text id="basic-addon1">
                  <FaUser />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Last Name..."
                aria-label="LastName"
                aria-describedby="basic-addon1"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        <InputGroup className="loginInput">
          <InputGroup.Prepend className="inputPrep">
            <InputGroup.Text id="basic-addon1">
              <FaUser />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            placeholder="Email..."
            aria-label="Email"
            autoComplete="off"
            aria-describedby="basic-addon1"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1 loginInputPass">
          <InputGroup.Prepend className="inputPrep">
            <InputGroup.Text id="basic-addon1">
              <FaKey />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            autoComplete="off"
            type="password"
            placeholder="Password..."
            aria-label="Password"
            aria-describedby="basic-addon1"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1 loginInputPass">
          <InputGroup.Prepend className="inputPrep">
            <InputGroup.Text id="basic-addon1">
              <FaKey />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            autoComplete="off"
            type="password"
            placeholder="Confirm Password..."
            aria-label="CPassword"
            aria-describedby="basic-addon1"
            required
            value={confirmPass}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </InputGroup>

        <div className="loginBtnContainer">
          <Button
            type="submit"
            className="font-weight-bold loginBtn btn-block"
            rounded="true"
          >
            Submit
          </Button>
        </div>

        <h6 className="mt-4 text-center font-weight-bold loginText">
          Already have an Account?{" "}
          <Link to="/" className="ml-2">
            Login
          </Link>
        </h6>
      </Form>
    </div>
  );
};

export default RegisterScreen;
