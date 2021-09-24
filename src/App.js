import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminDashboard from "./screens/AdminDashboard";
import AdminDeleteScreen from "./screens/AdminDeleteScreen";
import AdminSignUp from "./screens/AdminSignUp";
import AdminViewProfileScreen from "./screens/AdminViewProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/admin" component={AdminDashboard} exact />
        <Route path="/admin/delete" component={AdminDeleteScreen} exact />
        <Route
          path="/admin/profiles"
          component={AdminViewProfileScreen}
          exact
        />
        <Route path="/admin/new/sign_up" component={AdminSignUp} exact />
      </div>
    </Router>
  );
}

export default App;
