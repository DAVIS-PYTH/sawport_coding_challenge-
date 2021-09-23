import {
  FaBell,
  FaChevronRight,
  FaInfoCircle,
  FaPencilAlt,
  FaPlusCircle,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUserCircle,
  FaUserEdit,
} from "react-icons/fa";

const AdminComponent = ({ children }) => {
  return (
    <div className="adminComponent">
      <div className="adminSideBar">
        <div className="admin-title">
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

          <div className="activityItem">
            <h6 className="activity-text font-weight-bold">
              <span>
                <FaSignOutAlt /> Sign Out
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
