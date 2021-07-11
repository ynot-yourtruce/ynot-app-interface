import { Component } from "react";
import { connect } from "react-redux";
import PoolSelector from "./PoolSelector";
import { AiFillCaretDown } from "react-icons/ai";

class Settings extends Component {
  state = {
    poolSelectorModal: false,
  };

  toggleModal = () => {
    this.setState({
      poolSelectorModal: !this.state.poolSelectorModal,
    });
  };

  render() {
    return (
      <div className="poolSelector">
        {this.state.poolSelectorModal && (
          <PoolSelector closePoolModal={this.toggleModal} />
        )}
        {this.props.pair ? (
          <span onClick={this.toggleModal} className="cursorP">
            <div className="token">
              <img src={this.props.pair.logo_1} alt="" />
              {this.props.pair.ticker_1}
            </div>
            /
            <div className="token">
              <img src={this.props.pair.logo_2} alt="" />
              {this.props.pair.ticker_2}
            </div>
            <AiFillCaretDown />
          </span>
        ) : (
          <span onClick={this.toggleModal} className="cursorP">
            Select Pair <AiFillCaretDown />
          </span>
        )}

        <div className="divider"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
