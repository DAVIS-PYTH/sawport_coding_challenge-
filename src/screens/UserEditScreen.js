import AdminComponent from "../components/AdminComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FaUser, FaAt, FaUserClock, FaPhone } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { getUserAction } from "../actions/UserActions";

const UserEditScreen = ({ history, match }) => {
  const userID = match.params.id;
  const dispatch = useDispatch();
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { userDetails: userInfo } = loginUser;

  useEffect(() => {
    dispatch(getUserAction(userID));

    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <AdminComponent>
      <div className="changePassRow">
        <Form className="loginForm" autoComplete="off" onSubmit={submitHandler}>
          <h3 className="text-center font-weight-bold loginText">EDIT USER</h3>
          <Message variant="danger">
            <b>Can't fetch user details due to Api error!</b>
          </Message>

          <InputGroup className="loginInput ixap">
            <InputGroup.Prepend className="inputPrep">
              <InputGroup.Text id="basic-addon1">
                <FaUser />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Full Name.."
              aria-label="name"
              autoComplete="off"
              aria-describedby="basic-addon1"
              required
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </InputGroup>

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

export default UserEditScreen;
