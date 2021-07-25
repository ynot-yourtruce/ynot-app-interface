import { Component } from "react";
import Header from "../components/common/Header/Header";
import Input from "../components/Home/Input";
import { connect } from "react-redux";
import Back from "../components/common/Back";
import { getAmountsOut } from "../actions/router";
import { BigNumber } from "ethers";

class Swap extends Component {
  state = {
    amountOut: "",
    amountIn: "",
    loading: false,
  };

  getAmountOut = async (event) => {
    if (this.props.tokenA && this.props.tokenB && event.target.value != 0) {
      this.setState({
        amountIn: event.target.value,
        loading: true,
      });

      const amountIn = event.target.value;
      const path = [this.props.tokenA.address, this.props.tokenB.address];
      const amountOut = await getAmountsOut(
        path,
        BigNumber.from(amountIn).mul(
          BigNumber.from(10).pow(this.props.tokenA.decimal)
        ),
        this.props.userConnection
      );

      console.log(amountOut);

      // let lastAmountOut =
      //   amountOut[amountOut.length - 1] * 10 ** this.props.tokenB.decimal;
      // this.setState({
      //   amountOut: lastAmountOut,
      //   loading: false,
      // });
    }
  };

  swap = async () => {};

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
