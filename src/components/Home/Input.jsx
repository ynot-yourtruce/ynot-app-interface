import { Component } from "react";
import SelectToken from "./SelectToken";
import { AiFillCaretDown } from "react-icons/ai";
import { connect } from "react-redux";

class Input extends Component {
  state = { tokenSelector: false };

  openTokenSelector = () => {
    this.setState({
      tokenSelector: !this.state.tokenSelector,
    });
  };

  render() {
    const token =
      this.props.selector == "tokenA" ? this.props.tokenA : this.props.tokenB;

    return (
      <>
        {this.state.tokenSelector && (
          <SelectToken
            closeTokenSelector={this.openTokenSelector}
            selector={this.props.selector}
          />
        )}

        <div className="input">
          <div className="top">
            <input
              type="text"
              autoComplete="off"
              placeholder="1"
              onChange={this.props.onChange}
              disabled={this.props.disabled}
              value={this.props.value}
            />
            <div className="ticker" onClick={this.openTokenSelector}>
              {token ? (
                <>
                  <img src={token.logo} alt="" />
                  <span>
                    {token.ticker} <AiFillCaretDown />
                  </span>
                </>
              ) : (
                <span className="st">Select token</span>
              )}
            </div>
          </div>
          <div className="in-dollars">$0</div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { tokenA, tokenB } = state.tokenSelector;

  return {
    tokenA,
    tokenB,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // checkIfAlreadyConnected: () => dispatch(checkIfAlreadyConnected()),
    // connectWallet: () => dispatch(connectWallet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
