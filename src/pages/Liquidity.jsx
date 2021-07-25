import { Component } from "react";
import Header from "../components/common/Header/Header";
import Settings from "../components/MarketMakers/Settings";
import { connect } from "react-redux";
import Back from "../components/common/Back";
import { addLiquidity, getLiquidity } from "../actions/pairPool";

class Liquidity extends Component {
  state = {};

  getLiquidity = async (pair) => {
    // await getLiquidity(
    //   this.props.pair.address,
    //   this.props.userConnection,
    //   this.props.userAccount
    // );

    await addLiquidity(
      this.props.pair.address,
      this.props.userConnection,
      this.props.userAccount
    );

    await getLiquidity(
      this.props.pair.address,
      this.props.userConnection,
      this.props.userAccount
    );
  };

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
                  <div className="sbox">
                    <div className="swabox">
                      <div className="input">
                        <div className="top">
                          <input
                            type="text"
                            autoComplete="off"
                            placeholder="1"
                          />
                          <div className="ticker">
                            <img src={this.props.pair.logo_1} alt="" />
                            <span>{this.props.pair.ticker_1}</span>
                          </div>
                        </div>
                        <div className="in-dollars">$0</div>
                      </div>

                      <br />
                      <br />

                      <div className="input">
                        <div className="top">
                          <input
                            type="text"
                            autoComplete="off"
                            placeholder="1"
                          />
                          <div className="ticker">
                            <img src={this.props.pair.logo_2} alt="" />
                            <span>{this.props.pair.ticker_2}</span>
                          </div>
                        </div>
                        <div className="in-dollars">$0</div>
                      </div>
                      <br />
                      <br />
                      <div className="btn" onClick={this.getLiquidity}>
                        ADD LIQUIDITY
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { userConnection, userAccount } = state.connection;
  const { pair } = state.tokenSelector;

  return {
    pair,
    userConnection,
    userAccount,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {};
// }

export default connect(mapStateToProps, null)(Liquidity);
