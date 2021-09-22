import { useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="centerCard">
      <div className="loginCard">
        <Form className="loginForm" autoComplete="off" onSubmit={submitHandler}>
          <h3 className="text-center font-weight-bold loginText">Login!</h3>
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

          <InputGroup className="mb-3 loginInputPass">
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
            Don't have an Account?{" "}
            <Link to="/register" className="ml-2">
              Register
            </Link>
          </h6>
        </Form>
      </div>
    </div>
  );
};

export default LoginScreen;
