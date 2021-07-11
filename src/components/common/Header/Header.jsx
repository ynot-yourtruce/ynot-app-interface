import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  checkIfAlreadyConnected,
  connectWallet,
} from "../../../actions/connection";
import { connect } from "react-redux";

class Header extends Component {
  state = {};

  componentDidMount() {
    this.props.checkIfAlreadyConnected();
  }

  connect = () => {
    this.props.connectWallet();
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              Y<span className="mirror">N</span>OT{" "}
              <span className="f">finance</span>
              {/* <img
                src="https://yourtruce.com/assets/img/logo-invert.png"
                alt=""
              /> */}
            </Link>
          </div>
          <div>
            <a
              className="link"
              href="https://t.me/yourtruceofficial"
              target="_blank"
              rel="noreferrer"
            >
              Community
            </a>
            <Link className="link" to="/staking">
              Staking
            </Link>
            {this.props.userConnection ? (
              <div className="btn connect">CONNECTED</div>
            ) : (
              <div className="btn connect" onClick={this.connect}>
                CONNECT
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  const { userConnection, userAccount, loading, error } = state.connection;

  return {
    userConnection,
    userAccount,
    error,
    loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkIfAlreadyConnected: () => dispatch(checkIfAlreadyConnected()),
    connectWallet: () => dispatch(connectWallet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
