import {
  FaBell,
  FaChevronRight,
  FaInfoCircle,
  FaPencilAlt,
  FaPlusCircle,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTrash,
  FaUserCircle,
  FaUserEdit,
  FaUserPlus,
} from "react-icons/fa";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserLogOutAction } from "../actions/UserActions";

const AdminComponent = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (window.confirm("Are you Sure you want to Logout?")) {
      dispatch(UserLogOutAction());
      history.push("/");
    }
  };

  const redirectHandler = (url) => {
    history.push(url);
  };
  return (
    <div className="adminComponent">
      <div className="adminSideBar">
        <div
          className="admin-title"
          style={{ cursor: "pointer" }}
          onClick={() => redirectHandler("/admin")}
        >
          <h3 className="font-weight-bold text-center text-white">
            <FaTachometerAlt /> SAWPORT.INC
          </h3>
        </div>

        <div className="activities">
          <div className="activityItem">
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaUserCircle /> Manage Profiles
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>

          <div className="activityItem">
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaBell /> Alerts
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>

          <div className="activityItem">
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaUserEdit /> Edit Profile
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>

          <div
            className="activityItem"
            onClick={() => redirectHandler("/admin/new/sign_up")}
          >
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaUserPlus /> Add Admin
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>

          <div className="activityItem">
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaInfoCircle /> Complaints
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>

          <div className="activityItem" onClick={logoutHandler}>
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaSignOutAlt /> Sign Out
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>

          <div
            className="activityItem"
            onClick={() => redirectHandler("/admin/delete")}
          >
            <h6 className="activity-text text-warning font-weight-bold">
              <span>
                <FaTrash /> Delete Account
              </span>
              <span>
                <FaChevronRight />
              </span>
            </h6>
          </div>
        </div>
      </div>

      <div className="adminMainScreen">
        <div className="mainScreenTop shadow-sm">
          <h3 className="tint font-weight-bold"> CUSTOMER CARE PLATFORM </h3>
          <div className="flexNav">
            <div className="flex-circle mx-2">
              <FaPencilAlt className="text-success" />
            </div>

            <div className="flex-circle mx-2">
              <FaPlusCircle className="tint" />
            </div>

            <div className="flex-circle mx-2">
              <FaBell className="text-danger" />
            </div>

            <div className="flex-circle mx-2">
              <FaUserCircle className="tint" />
            </div>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminComponent;
