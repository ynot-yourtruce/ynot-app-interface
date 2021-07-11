import { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";

class OpenPosition extends Component {
  state = {};

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
            <div className="btn btn-block">{this.props.mode}</div>
          </div>
        </div>
      </>
    );
  }
}

export default OpenPosition;
