import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminDashboard from "./screens/AdminDashboard";
import AdminDeleteScreen from "./screens/AdminDeleteScreen";
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
      </div>
    </Router>
  );
}

export default App;
