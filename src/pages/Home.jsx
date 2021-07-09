import { Component } from "react";
import Header from "../components/common/Header/Header";
import Input from "../components/Home/Input";
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
            <div className="swabox">
              <Input selector="tokenA" />

              <br />
              <br />

              <Input selector="tokenB" />

              <br />
              <br />
              <div className="btn">SWAP</div>
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
