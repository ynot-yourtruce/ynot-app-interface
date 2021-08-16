import { Component } from "react";
import Header from "../components/common/Header/Header";
import Input from "../components/Home/Input";
import { connect } from "react-redux";
import Back from "../components/common/Back";
import { getAmountsOut, swap } from "../actions/router";
import { BigNumber } from "ethers";

class Swap extends Component {
  state = {
    amountOut: "",
    amountIn: "",
    bamountIn: 0,
    bamountOut: 0,
    loading: false,
  };

  getRoute = () => {
    return [this.props.tokenA.address, this.props.tokenB.address];
  };

  getAmountOut = async (event) => {
    if (this.props.tokenA && this.props.tokenB && event.target.value != 0) {
      const amountIn = event.target.value;
      const path = this.getRoute();
      const bamountIn = BigNumber.from(amountIn).mul(
        BigNumber.from(10).pow(this.props.tokenA.decimal)
      );

      this.setState({
        amountIn: event.target.value,
        bamountIn: bamountIn,
        loading: true,
      });

      const amountOut = await getAmountsOut(
        path,
        bamountIn,
        this.props.userConnection
      );

      let lastAmountOut = (
        amountOut[amountOut.length - 1] /
        10 ** this.props.tokenB.decimal
      ).toFixed(3);

      this.setState({
        amountOut: lastAmountOut,
        loading: false,
        bamountOut: amountOut,
      });
    }
  };

  swap = async () => {
    swap(
      this.getRoute(),
      this.state.bamountIn.toString(),
      (this.state.amountOut * 10 ** 18).toString(),
      this.props.userConnection,
      this.props.userAccount
    );
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <section>
            <div className="sbox">
              <Back />
              <div className="swabox">
                <Input
                  selector="tokenA"
                  onChange={this.getAmountOut}
                  value={this.state.amountIn}
                />

                <br />
                <br />

                <Input
                  selector="tokenB"
                  value=""
                  disabled={true}
                  value={this.state.amountOut}
                />

                <br />
                <br />
                <div className="btn" onClick={this.swap}>
                  SWAP
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { userConnection, userAccount, loading, error } = state.connection;
  const { tokenList, tokenA, tokenB } = state.tokenSelector;

  return {
    tokenA,
    tokenB,
    tokenList,
    userConnection,
    userAccount,
    error,
    loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // checkIfAlreadyConnected: () => dispatch(checkIfAlreadyConnected()),
    // connectWallet: () => dispatch(connectWallet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Swap);
