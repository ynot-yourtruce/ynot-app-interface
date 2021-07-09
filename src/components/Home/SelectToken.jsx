import { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { selectToken } from "../../actions/tokenSelector";

class SelectToken extends Component {
  state = {};

  selectToken = (token) => {
    this.props.selectToken(this.props.selector, token);
    this.props.closeTokenSelector();
  };

  getTokenList = () => {
    const tokenToRemove =
      this.props.selector == "tokenA" ? this.props.tokenB : this.props.tokenA;

    const tokenList = this.props.tokenList.slice();

    const index = tokenList.indexOf(tokenToRemove);
    if (index > -1) {
      tokenList.splice(index, 1);
    }

    return tokenList;
  };

  render() {
    return (
      <>
        <div className="modal-bg" onClick={this.props.closeTokenSelector}></div>
        <div className="modal-yt tokenSelector">
          <div className="close" onClick={this.props.closeTokenSelector}>
            <AiOutlineClose />
          </div>
          <h3>LIST OF TOKENS</h3>

          <div className="lists">
            {this.getTokenList().map((token, index) => (
              <div
                className="list"
                onClick={() => this.selectToken(token)}
                key={index}
              >
                <div className="img">
                  <img src={token.logo} alt="" />
                </div>
                <div className="details">
                  <div className="ticker">{token.ticker}</div>
                  <div className="name">{token.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer">SELECT A TOKEN</div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { tokenList, tokenA, tokenB } = state.tokenSelector;

  return {
    tokenList,
    tokenA,
    tokenB,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectToken: (tokenType, token) => dispatch(selectToken(tokenType, token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectToken);
