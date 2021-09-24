import AdminComponent from "../components/AdminComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsersAction, getAdminsAction } from "../actions/UserActions";

const AdminDashboard = ({ history }) => {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.GetUsersReducer);
  const { users } = allUsers;
  const realUsers = users ? users.data : null;

  const allAdmins = useSelector((state) => state.GetAdminsReducer);
  const { admins } = allAdmins;
  const realAdmins = admins ? admins.data : null;

  const loginUser = useSelector((state) => state.UserLoginReducer);
  const { userDetails: userInfo } = loginUser;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    dispatch(getUsersAction());
    dispatch(getAdminsAction());
  }, [dispatch, history, userInfo]);

  return (
    <AdminComponent>
      <div className="dashboardGrid">
        <div className="dashItemCard">
          <div className="dashTop">
            <h5 className="font-weight-bold tint text-center">
              REGISTERED USERS
            </h5>
          </div>

          <div className="font-weight-bold dashBottom">
            <h1 className="font-weight-bold tint opacity text-center">
              {realAdmins && realUsers
                ? realAdmins.length + realUsers.length
                : 0}{" "}
            </h1>
          </div>
        </div>

        <div className="dashItemCard">
          <div className="dashTop">
            <h5 className="font-weight-bold tint text-center">
              ADMIN PROFILES
            </h5>
          </div>

          <div className="font-weight-bold dashBottom">
            <h1 className="font-weight-bold tint opacity text-center">
              {realAdmins ? realAdmins.length : 0}
            </h1>
          </div>
        </div>

        <div className="dashItemCard">
          <div className="dashTop">
            <h5 className="font-weight-bold tint text-center">USER PROFILES</h5>
          </div>

          <div className="font-weight-bold dashBottom">
            <h1 className="font-weight-bold tint opacity text-center">
              {realUsers ? realUsers.length : 0}{" "}
            </h1>
          </div>
        </div>
      </div>
    </AdminComponent>
  );
};

export default AdminDashboard;
