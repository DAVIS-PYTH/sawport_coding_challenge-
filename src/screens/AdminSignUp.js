import AdminComponent from "../components/AdminComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FaUser, FaKey, FaAt, FaUserClock, FaPhone } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { AdminRegisterAction } from "../actions/UserActions";
import { ADMIN_REGISTER_RESET } from "../constants/UserConstants";

const AdminSignUp = ({ history }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setCPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setMessage("Password and Confirm Password Do Not Match!");
    } else if (sex === "sex") {
      setMessage("Gender is not Valid");
    } else {
      dispatch(
        AdminRegisterAction({
          fullName: firstName + " " + lastName,
          email,
          phone,
          password,
          sex,
          age,
        })
      );
    }
  };

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { userDetails: userInfo } = loginUser;

  const registerUser = useSelector((state) => state.AdminRegisterReducer);
  const { loading, error, success } = registerUser;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    if (success) {
      dispatch({ type: ADMIN_REGISTER_RESET });
      history.push("/admin");
    }
  }, [dispatch, history, userInfo, success]);

  return (
    <AdminComponent>
      <div className="changePassRow">
        <Form className="loginForm" autoComplete="off" onSubmit={submitHandler}>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          {loading && <Loader />}

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

          <Row className="loginInput">
            <Col md={6}>
              <InputGroup>
                <InputGroup.Prepend className="inputPrep">
                  <InputGroup.Text id="basic-addon1">
                    <FaUserClock />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="number"
                  placeholder="Age..."
                  aria-label="Age"
                  aria-describedby="basic-addon1"
                  required
                  autoComplete="off"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup>
                <InputGroup.Prepend className="inputPrep">
                  <InputGroup.Text id="basic-addon1">
                    <ImManWoman />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  as="select"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option value="sex" defaultValue>
                    Sex
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </InputGroup>
            </Col>
          </Row>

          <InputGroup className="loginInput ixap">
            <InputGroup.Prepend className="inputPrep">
              <InputGroup.Text id="basic-addon1">
                <FaPhone />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Phone Number.."
              aria-label="Number"
              autoComplete="off"
              aria-describedby="basic-addon1"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="loginInput ixap">
            <InputGroup.Prepend className="inputPrep">
              <InputGroup.Text id="basic-addon1">
                <FaAt />
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
        </Form>
      </div>
    </AdminComponent>
  );
};

export default AdminSignUp;
