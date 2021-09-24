import AdminComponent from "../components/AdminComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction, getAdminsAction } from "../actions/UserActions";
import { Table, Button } from "react-bootstrap";
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";

const AdminViewProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { userDetails: userInfo } = loginUser;

  const allUsers = useSelector((state) => state.GetUsersReducer);
  const { users } = allUsers;
  const realUsers = users ? users.data : null;

  const allAdmins = useSelector((state) => state.GetAdminsReducer);
  const { admins } = allAdmins;
  const realAdmins = admins ? admins.data : null;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    dispatch(getUsersAction());
    dispatch(getAdminsAction());
  }, [dispatch, history, userInfo]);

  return (
    <AdminComponent>
      <div className="AdminRow">
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

                    <Button variant="danger" className="btn-sm">
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

                    <Button variant="danger" className="btn-sm ml-2">
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
