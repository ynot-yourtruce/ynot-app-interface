import { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { selectPair } from "../../actions/tokenSelector";

class PoolSelector extends Component {
  state = {};

  selectPair = (pool) => {
    this.props.selectPair(pool);
    this.props.closePoolModal();
  };

  render() {
    return (
      <>
        <div className="modal-bg" onClick={this.props.closePoolModal}></div>
        <div className="modal-yt tokenSelector">
          <div className="close" onClick={this.props.closePoolModal}>
            <AiOutlineClose />
          </div>
          <h3>LIST OF PAIR</h3>

          <div className="lists">
            {this.props.pairList.map((pair, index) => (
              <div
                className="list"
                onClick={() => this.selectPair(pair)}
                key={index}
              >
                <>
                  <div className="token">
                    <img src={pair.logo_1} alt="" />
                    <img src={pair.logo_2} alt="" />
                    {pair.ticker_1}-{pair.ticker_2}
                  </div>
                </>
              </div>
            ))}
          </div>
          <div className="footer">SELECT A PAIR</div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { pairList } = state.tokenSelector;

  return {
    pairList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPair: (pool) => dispatch(selectPair(pool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PoolSelector);
