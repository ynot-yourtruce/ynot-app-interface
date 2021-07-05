import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://yourtruce.com/assets/img/logo-invert.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/market-makers">Market Makers</Link>
            <div className="btn connect">CONNECT</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
