import { Component } from "react";
import Header from "../components/common/Header/Header";
import SelectToken from "../components/Home/SelectToken";

class Liquidity extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {this.state.tokenSelector && (
          <SelectToken closeTokenSelector={this.openTokenSelector} />
        )}
        <div className="container">
          <div className="headerPadding">
            <h1>Liquidity</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Liquidity;
