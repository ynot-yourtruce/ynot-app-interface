import { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { placeOrder } from "../../actions/trading";
import { connect } from "react-redux";

class OpenPosition extends Component {
  state = {};

  addOrder = () => {
    placeOrder(
      "0x198c09598595cB12E0966ef0Dec2aeCF7E836f54",
      // "0x0B875130478443Ef762E8A8906891c274F426a7B",
      this.props.userConnection,
      this.props.userAccount
    );
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
                <input type="text" autoComplete="off" placeholder="1" />
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
