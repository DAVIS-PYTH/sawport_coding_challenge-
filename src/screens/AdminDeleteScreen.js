import AdminComponent from "../components/AdminComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { FaKey } from "react-icons/fa";
import { AdminDeleteAction, UserLogOutAction } from "../actions/UserActions";
import { ADMIN_DELETE_RESET } from "../constants/UserConstants";

const AdminDeleteScreen = ({ history }) => {
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (confirm === "Delete my AccOUnt") {
      dispatch(AdminDeleteAction("61315392d38e43007e4aa3ee"));
    } else {
      setMessage("Confirmation text does not match!");
    }
  };

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { userDetails: userInfo } = loginUser;

  const deleteAdmin = useSelector((state) => state.DeleteAdminReducer);
  const { loading, error, success } = deleteAdmin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    if (success) {
      dispatch(UserLogOutAction());
      dispatch({ type: ADMIN_DELETE_RESET });
    }
  }, [dispatch, history, userInfo, success]);

  return (
    <AdminComponent>
      <Message variant="danger">
        <b>
          This action cannot be reversed!! Type{" "}
          <span className="text-dark">"Delete my AccOUnt"</span> to confirm this
          Action.
        </b>
      </Message>

      {error && <Message variant="danger">{error}</Message>}
      {message && <Message variant="danger">{message}</Message>}
      {loading && <Loader />}

      <div className="changePassRow">
        <Form className="changePass" onSubmit={submitHandler}>
          <InputGroup className="mb-3 loginInputPass">
            <InputGroup.Prepend className="inputPrep">
              <InputGroup.Text id="basic-addon1">
                <FaKey className="text-danger" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              aria-label="text"
              aria-describedby="basic-addon1"
              className="text-danger"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </InputGroup>

          <div className="loginBtnContainer">
            <Button
              type="submit"
              className="font-weight-bold btn-danger btn-block"
              rounded="true"
            >
              Delete
            </Button>
          </div>
        </Form>
      </div>
    </AdminComponent>
  );
};

export default AdminDeleteScreen;
