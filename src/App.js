import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            {/* <Switch>
              <Route path="/" component={  } exact={true}></Route>
              <Route path="/user" component={  } exact={true}></Route>
              <Route path="/product" component={  } exact={true}></Route>
            </Switch> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
