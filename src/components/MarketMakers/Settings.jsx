import { Component } from "react";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="poolSelector">
        <div className="token">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            alt=""
          />
          BTC
        </div>
        /
        <div className="token">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
            alt=""
          />
          USDT
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Settings;
