import { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";

class SelectToken extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="modal-bg" onClick={this.props.closeTokenSelector}></div>
        <div className="modal tokenSelector">
          <div className="close" onClick={this.props.closeTokenSelector}>
            <AiOutlineClose />
          </div>
          <h3>LIST OF TOKENS</h3>

          <div className="lists">
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
            <div className="list">
              <div className="img">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="ticker">BTC</div>
                <div className="name">BITCOIN</div>
              </div>
            </div>
          </div>
          <div className="footer">SELECT A TOKEN</div>
        </div>
      </>
    );
  }
}

export default SelectToken;
