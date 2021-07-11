import { Component } from "react";
import Header from "../components/common/Header/Header";
import PoolCard from "../components/MarketMakers/PoolCard";
import Settings from "../components/MarketMakers/Settings";
import { connect } from "react-redux";

class Trading extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="headerPadding">
            <div className="marketMaker">
              <Settings />

              <div className="contract-list">
                {this.props.pair && (
                  // <div className="row">
                  //   <div className="col-md-8">
                  <PoolCard />
                  //   </div>
                  //   <div className="col-md-4">
                  //     <h3>Open Positions</h3>
                  //   </div>
                  // </div>
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

export default connect(mapStateToProps, null)(Trading);
