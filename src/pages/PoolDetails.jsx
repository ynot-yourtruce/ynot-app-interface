import { Component } from "react";
import Header from "../components/common/Header/Header";

class PoolDetails extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="headerPadding">
            <div className="contract-list">
              <div className="contract">
                <div className="slippage">
                  <div>37,340 USDT</div>
                  0.05%
                </div>
                <div className="amount">
                  <div>10K BTC - 50K BTC</div>
                  Amount
                </div>

                <div className="volume">240M USDT</div>

                <div className="tvl">
                  <div>40K BTC</div>
                  TVL
                </div>
              </div>
              <br />
              <input type="text" className="withdraw" placeholder="100" />
              <br />
              <br />
              <div className="btn block">ADD FUNDS</div>
              <br />
              <div className="btn block">WITHDRAW</div>
              <br />
              <div className="btn block">CANCEL</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PoolDetails;
