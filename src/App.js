import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Users from "./Users";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
            <Switch>
              <Route path="/" component={ Dashboard } exact={true}></Route>
              <Route path="/user" component={ Users } exact={true}></Route>
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
