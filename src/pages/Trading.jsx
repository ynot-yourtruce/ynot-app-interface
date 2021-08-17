import { Component } from "react";
import Header from "../components/common/Header/Header";
import PoolCard from "../components/MarketMakers/PoolCard";
import Settings from "../components/MarketMakers/Settings";
import { connect } from "react-redux";
import Back from "../components/common/Back";
import { placeOrder } from "../actions/trading";

class Trading extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="headerPadding">
            <Back />
            <div className="marketMaker">
              <Settings />

              <div className="contract-list">
                {this.props.pair && (
                  <div className="row">
                    <PoolCard />
                    <h2 className="mt-4 mb-4">Open Positions</h2>
                    {/* <div className="row">
                      <div className="col-3">
                        <div className="nft swabox">
                          <div className="img">
                            <img
                              src="https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/30817.png?size=autox430"
                              alt=""
                            />
                          </div>
                          <div className="amount">100 USDT</div>
                          <div className="pnl green">2.3%</div>
                          <div className="date">2 Days Ago</div>
                          <div className="btn block btn-small mt-2">Close</div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="nft swabox">
                          <div className="img">
                            <img
                              src="https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/30817.png?size=autox430"
                              alt=""
                            />
                          </div>
                          <div className="amount">100 USDT</div>
                          <div className="pnl green">2.3%</div>
                          <div className="date">2 Days Ago</div>
                          <div className="btn block btn-small mt-2">Close</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                )}
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { pair } = state.tokenSelector;
  const { userConnection, userAccount } = state.connection;

  return {
    pair,
    userConnection,
    userAccount,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {};
// }

export default connect(mapStateToProps, null)(Trading);
