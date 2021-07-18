import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/app.scss";
import {
  BrowserRouter as Router,Redirect,
  Switch,
} from "react-router-dom";
import { routes } from "./config/router";
import { RouteWithSubRoutes } from "./helpers";


class App extends Component {
 render() {
  return (
    <div className="App">
        <Switch>
        {/* Loop through routes defined under routes.js page */}
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    </div>
  );
}
}

export default App;
