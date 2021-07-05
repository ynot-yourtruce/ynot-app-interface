import { Component } from "react";
import SelectToken from "./SelectToken";

class Input extends Component {
  state = { tokenSelector: false };

  openTokenSelector = () => {
    this.setState({
      tokenSelector: !this.state.tokenSelector,
    });
  };

  render() {
    return (
      <>
        {this.state.tokenSelector && (
          <SelectToken closeTokenSelector={this.openTokenSelector} />
        )}
        <div className="input">
          <div className="top">
            <div className="ticker" onClick={this.openTokenSelector}>
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt=""
              />
            </div>
            <input type="text" autoComplete="off" placeholder="1" />
          </div>
          <div className="in-dollars">$200,000</div>
        </div>
      </>
    );
  }
}

export default Input;
