import AdminComponent from "../components/AdminComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getUsersAction,
  getAdminsAction,
  AdminDeleteAction,
  UserDeleteAction,
} from "../actions/UserActions";
import { Table, Button } from "react-bootstrap";
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { ADMIN_DELETE_RESET } from "../constants/UserConstants";
import { USER_DELETE_RESET } from "../constants/UserConstants";

const AdminViewProfileScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { userDetails: userInfo } = loginUser;

  const allUsers = useSelector((state) => state.GetUsersReducer);
  const { users } = allUsers;
  const realUsers = users ? users.data : null;

  const allAdmins = useSelector((state) => state.GetAdminsReducer);
  const { admins } = allAdmins;
  const realAdmins = admins ? admins.data : null;

  const deleteAdmin = useSelector((state) => state.DeleteAdminReducer);
  const { loading, error, success } = deleteAdmin;

  const adminDeleteHandler = (id) => {
    if (window.confirm("Are you Sure you want to Delete this Admin user?")) {
      if (id === "614de1bc6389b2007e9c3dae") {
        setMessage("This user can't be deleted");
      } else {
        dispatch(AdminDeleteAction(id));
      }
    }
  };

  const deleteUser = useSelector((state) => state.DeleteUserReducer);
  const {
    loading: loadingDeleteUser,
    error: errorDeleteUser,
    success: successDeleteUser,
  } = deleteUser;

  const userDeleteHandler = (id) => {
    if (window.confirm("Are you Sure you want to Delete this user?")) {
      dispatch(UserDeleteAction(id));
    }
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    if (success) {
      dispatch({ type: ADMIN_DELETE_RESET });
    }

    if (successDeleteUser) {
      dispatch({ type: USER_DELETE_RESET });
    }

    dispatch(getUsersAction());
    dispatch(getAdminsAction());
  }, [dispatch, history, userInfo, success, successDeleteUser]);

  return (
    <AdminComponent>
      <div className="AdminRow">
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        {loading && <Loader />}
        {errorDeleteUser && (
          <Message variant="danger">{errorDeleteUser}</Message>
        )}
        {loadingDeleteUser && <Loader />}

        <Table striped responsive bordered hover className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {realUsers &&
              realUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>
                    <FaTimes className="text-danger" />
                  </td>
                  <td>
                    <Button variant="light" className="btn-sm  mrr-3">
                      <FaEdit />
                    </Button>

                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => userDeleteHandler(user._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            {realAdmins &&
              realAdmins.map((admin) => (
                <tr key={admin._id}>
                  <td>{admin._id}</td>
                  <td>{admin.email}</td>
                  <td>{admin.email}</td>
                  <td>
                    <FaCheck className="text-success" />
                  </td>
                  <td>
                    <Button variant="light" className="btn-sm mrr-3">
                      <FaEdit />
                    </Button>

                    <Button
                      variant="danger"
                      className="btn-sm ml-2"
                      onClick={() => adminDeleteHandler(admin._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </AdminComponent>
  );
};

export default AdminViewProfileScreen;
