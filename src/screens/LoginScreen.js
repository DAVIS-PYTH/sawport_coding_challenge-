import { useState, useEffect } from "react";
import { UserLoginAction } from "../actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { loading, error, userDetails, success } = loginUser;

  useEffect(() => {
    if (userDetails || success) {
      history.push("/admin");
    }
  }, [userDetails, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(UserLoginAction({ email, password }, isAdmin));
  };

  return (
    <div className="myContainer">
      <div className="loginCard">
        <Form className="loginForm" autoComplete="off" onSubmit={submitHandler}>
          <h3 className="text-center font-weight-bold loginText">Login!</h3>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}

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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              label="Admin"
            />
          </Form.Group>

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
