import { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { placeOrder } from "../../actions/trading";
import { connect } from "react-redux";

class OpenPosition extends Component {
  state = {
    amount: 0,
  };

  addOrder = () => {
    placeOrder(
      this.props.mode == "long"
        ? this.props.pair.tokens[1]
        : this.props.pair.tokens[0],
      this.state.amount,
      this.props.userConnection,
      this.props.userAccount
    );
  };

  handleAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  render() {
    const token =
      this.props.mode == "long"
        ? { logo: this.props.token.logo_2, ticker: this.props.token.ticker_2 }
        : { logo: this.props.token.logo_1, ticker: this.props.token.ticker_1 };

    return (
      <>
        <div className="modal-bg" onClick={this.props.closePositionModal}></div>
        <div className="modal-yt position">
          <div className="close" onClick={this.props.closePositionModal}>
            <AiOutlineClose />
          </div>
          <h3>OPEN POSITION</h3>
          <div className="body">
            <div className="input">
              <div className="top">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="1"
                  onChange={this.handleAmount}
                />
                <div className="ticker">
                  <img src={token.logo} alt="" />
                  <span>{token.ticker}</span>
                </div>
              </div>
              <div className="in-dollars">$0</div>
            </div>
            <div className="btn btn-block" onClick={this.addOrder}>
              {this.props.mode}
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

export default connect(mapStateToProps, null)(OpenPosition);
