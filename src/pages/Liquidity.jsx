import { Component } from "react";
import Header from "../components/common/Header/Header";
import Settings from "../components/MarketMakers/Settings";
import { connect } from "react-redux";
import Back from "../components/common/Back";
import { addLiquidity, getLiquidity } from "../actions/pairPool";
import { BigNumber } from "ethers";
import { getAmountsOut, getAmountsOutPair } from "../actions/router";

class Liquidity extends Component {
  state = {};

  getAmountOut = async (event) => {
    if (event.target.value != 0) {
      const amountIn = event.target.value;

      const bamountIn = BigNumber.from(amountIn).mul(
        BigNumber.from(10).pow(18)
      );

      this.setState({
        amountIn: event.target.value,
        bamountIn: bamountIn,
        loading: true,
      });

      const amountOut = await getAmountsOutPair(
        this.props.pair.address,
        bamountIn,
        this.props.userConnection
      );

      console.log(amountOut);

      let lastAmountOut = (amountOut / 10 ** 18).toFixed(3);

      this.setState({
        amountOut: lastAmountOut,
        loading: false,
        bamountOut: amountOut,
      });
    }
  };

  getLiquidity = async (pair) => {
    // await getLiquidity(
    //   this.props.pair.address,
    //   this.props.userConnection,
    //   this.props.userAccount
    // );

    await addLiquidity(
      this.state.bamountIn,
      this.state.bamountOut,
      this.props.pair.address,
      this.props.userConnection,
      this.props.userAccount
    );

    // await getLiquidity(
    //   this.props.pair.address,
    //   this.props.userConnection,
    //   this.props.userAccount
    // );
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
                            onChange={this.getAmountOut}
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
                            disabled={true}
                            value={this.state.amountOut}
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
