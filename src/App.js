import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateUser from "./CreateUser";
import Dashboard from "./Dashboard";
import EditUser from "./EditUser";
import Product from "./Product";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Users from "./Users";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
            <Switch>
              <Route path="/" component={ Dashboard } exact={true}></Route>
              <Route path="/user" component={ Users } exact={true}></Route>
              <Route path="/create_user" component={ CreateUser } exact={true}></Route>
              <Route path="/user/edit/:id" component={ EditUser } exact={true}></Route>
              <Route path="/products" component={ Product } exact={true}></Route>
            </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
