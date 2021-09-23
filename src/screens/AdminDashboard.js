import AdminComponent from "../components/AdminComponent";

const AdminDashboard = () => {
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
            <h1 className="font-weight-bold tint opacity text-center">190 </h1>
          </div>
        </div>

        <div className="dashItemCard">
          <div className="dashTop">
            <h5 className="font-weight-bold tint text-center">
              ADMIN PROFILES
            </h5>
          </div>

          <div className="font-weight-bold dashBottom">
            <h1 className="font-weight-bold tint opacity text-center">30 </h1>
          </div>
        </div>

        <div className="dashItemCard">
          <div className="dashTop">
            <h5 className="font-weight-bold tint text-center">USER PROFILES</h5>
          </div>

          <div className="font-weight-bold dashBottom">
            <h1 className="font-weight-bold tint opacity text-center">160 </h1>
          </div>
        </div>
      </div>
    </AdminComponent>
  );
};

export default AdminDashboard;
