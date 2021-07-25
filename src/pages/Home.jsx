import { Component } from "react";
import Header from "../components/common/Header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  createPair,
  createPairFactory,
  getPools,
  setFactory,
} from "../actions/genesis";

class Home extends Component {
  state = {};

  componentDidMount() {}

  createGenesisPair = async () => {
    // await setFactory(this.props.userConnection, this.props.userAccount);

    await createPairFactory(
      "0x198c09598595cB12E0966ef0Dec2aeCF7E836f54",
      "0x0B875130478443Ef762E8A8906891c274F426a7B",
      this.props.userConnection,
      this.props.userAccount
    );

    // await createPair(
    //   "0x198c09598595cB12E0966ef0Dec2aeCF7E836f54",
    //   "0x0B875130478443Ef762E8A8906891c274F426a7B",
    //   this.props.userConnection,
    //   this.props.userAccount
    // );

    await getPools(this.props.userConnection, this.props.userAccount);

    // 0xf483dd1c2400f3152fc8c16619b2f520d87eb30d;
  };

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
              <br />
              <div
                className="btn display-block"
                onClick={this.createGenesisPair}
              >
                Create
              </div>
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
