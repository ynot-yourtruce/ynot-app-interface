import { Component } from "react";
import OpenPosition from "./OpenPosition";
import { connect } from "react-redux";
import { getDetails } from "../../actions/trading";
import { CONTRACT } from "../../config";

class PoolCard extends Component {
  state = {
    positionModal: false,
    mode: null,
    orderBooks: [],
  };

  async componentDidMount() {
    console.log("ooo");
    const details = await getDetails(
      this.props.pair,
      CONTRACT.ORDEROOK,
      this.props.userConnection
    );

    console.log(details);

    this.setState({
      orderBooks: details,
    });
  }

  toggleModal = (mode) => {
    this.setState({
      positionModal: !this.state.positionModal,
      mode: mode,
    });
  };

  render() {
    return (
      <div className="contract">
        {this.state.positionModal && (
          <OpenPosition
            closePositionModal={this.toggleModal}
            mode={this.state.mode}
            token={this.props.pair}
          />
        )}

        {this.state.orderBooks.map((order, index) => {
          if (order.balance > 0) {
            return (
              <div className="body">
                <div className="slippage">
                  {/* <div>300</div>
            Address */}
                </div>
                <div className="amount">
                  <div>
                    {order.balance} {order.info.ticker}
                  </div>
                  Amount
                </div>
              </div>
            );
          }
        })}

        <div className="action">
          <div className="btn" onClick={() => this.toggleModal("long")}>
            LONG
          </div>
          <div className="btn" onClick={() => this.toggleModal("short")}>
            SHORT
          </div>
        </div>
      </div>
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

function mapDispatchToProps(dispatch) {
  return {
    // checkIfAlreadyConnected: () => dispatch(checkIfAlreadyConnected()),
    // connectWallet: () => dispatch(connectWallet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
