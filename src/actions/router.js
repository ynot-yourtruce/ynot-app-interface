import { CONTRACT } from "../config";
import ROUTER from "../abis/Router.json";
import PAIR_POOL from "../abis/PairPool.json";
import { BigNumber } from "ethers";
import { approveERC20 } from "./erc20";

export const getAmountsOut = async(path, amount, web3) =>  {
    try{
        let contract = new web3.eth.Contract(ROUTER, CONTRACT.ROUTER);
        const amountOut = await contract.methods.getAmountsOut(path, amount).call();

        return amountOut;
    }catch(ex){
        console.log(ex.message);
    }
}

export const getAmountsOutPair = async(pair, amount, web3) => {
    try{
        let contract = new web3.eth.Contract(PAIR_POOL, pair);
        const reserve = await contract.methods.getReserve().call();

        const ratio = reserve[0] / reserve[1];

        return amount * ratio;
    }catch(ex){
        console.log(ex.message);
    }
}


export const swap = async(path, amountIn, amountOut, web3, account) =>  {
    try{

        await approveERC20(path[0], CONTRACT.ROUTER, amountIn, web3, account);
        // await approveERC20("0x0B875130478443Ef762E8A8906891c274F426a7B", CONTRACT.ROUTER, amountIn, web3, account);

        let contract = new web3.eth.Contract(ROUTER, CONTRACT.ROUTER);
        await contract.methods.swapTokensForExactTokens(path, amountIn, 0, account).send({from: account});

        console.log("Swap");
    }catch(ex){
        console.log(ex.message);
    }
}