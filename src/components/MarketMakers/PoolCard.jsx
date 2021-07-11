import { Component } from "react";
import OpenPosition from "./OpenPosition";
import { connect } from "react-redux";

class PoolCard extends Component {
  state = {
    positionModal: false,
    mode: null,
  };

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

        <div className="body">
          <div className="slippage">
            <div>300</div>
            Address
          </div>
          <div className="amount">
            <div>5 BTC</div>
            Amount
          </div>
        </div>
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

  return {
    pair,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // checkIfAlreadyConnected: () => dispatch(checkIfAlreadyConnected()),
    // connectWallet: () => dispatch(connectWallet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
