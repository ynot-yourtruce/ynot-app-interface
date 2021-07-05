import { Component } from "react";
import Header from "../components/common/Header/Header";
import PoolCard from "../components/MarketMakers/PoolCard";
import Settings from "../components/MarketMakers/Settings";

class MarketMakers extends Component {
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
                <PoolCard />
                <PoolCard />
                <PoolCard />
                <PoolCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MarketMakers;
