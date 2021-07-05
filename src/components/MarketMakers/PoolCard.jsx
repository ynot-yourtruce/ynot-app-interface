import { Component } from "react";

class PoolCard extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default PoolCard;
