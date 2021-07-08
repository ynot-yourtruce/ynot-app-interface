import { Component } from "react";
import SelectToken from "./SelectToken";
import { AiFillCaretDown } from "react-icons/ai";

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
            <input type="text" autoComplete="off" placeholder="1" />
            <div className="ticker" onClick={this.openTokenSelector}>
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt=""
              />
              <span>
                BTC <AiFillCaretDown />
              </span>
            </div>
          </div>
          <div className="in-dollars">$200,000</div>
        </div>
      </>
    );
  }
}

export default Input;
