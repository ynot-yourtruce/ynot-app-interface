import { Component } from "react";
import Header from "../components/common/Header/Header";
import Settings from "../components/MarketMakers/Settings";
import { connect } from "react-redux";
import Back from "../components/common/Back";

class Liquidity extends Component {
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
                      <div className="btn">ADD LIQUIDITY</div>
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
  const { pair } = state.tokenSelector;

  return {
    pair,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {};
// }

export default connect(mapStateToProps, null)(Liquidity);
