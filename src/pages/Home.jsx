import { Component } from "react";
import Header from "../components/common/Header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <section>
            <div className="boxes">
              <Link className="link" to="/swap">
                Swap
              </Link>
              <Link className="link" to="/trading">
                Free Trading
              </Link>
              <Link className="link" to="/liquidity">
                Liquidity
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { userConnection, userAccount, loading, error } = state.connection;
  const { tokenList } = state.tokenSelector;

  return {
    tokenList,
    userConnection,
    userAccount,
    error,
    loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // checkIfAlreadyConnected: () => dispatch(checkIfAlreadyConnected()),
    // connectWallet: () => dispatch(connectWallet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
