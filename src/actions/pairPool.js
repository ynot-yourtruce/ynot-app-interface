import { CONTRACT } from "../config";
import PAIR_POOL from "../abis/PairPool.json";
import { approveERC20 } from "./erc20";
import { BigNumber } from "ethers";


export const addLiquidity = async(pair, web3, account) =>  {
    try{

        let amount1 = BigNumber.from(1000).mul(BigNumber.from(10).pow(18));

        let amount2 = BigNumber.from(1000).mul(BigNumber.from(10).pow(18));

        const tokens = await getToken(pair, web3);

        await approveERC20(tokens[0], pair, amount1, web3, account);
        await approveERC20(tokens[1], pair, amount2, web3, account);

        let contract = new web3.eth.Contract(PAIR_POOL, pair);
        await contract.methods.addInitialLiquidity(amount1, amount2).send({from: account});

        console.log("Liquidity")
    }catch(ex){
        console.log(ex.message);
    }
}


export const getLiquidity = async(pair, web3, account) =>  {
    try{
        
        let contract = new web3.eth.Contract(PAIR_POOL, pair);
        const reserveIn = await contract.methods.reserveIn().call();
        const reserveOut = await contract.methods.reserveIn().call();
        console.log("Done!", reserveIn, reserveOut);

    }catch(ex){
        console.log(ex.message);
    }
}

export const getToken = async(pair, web3) =>  {
    try{
        console.log(pair)
        let contract = new web3.eth.Contract(PAIR_POOL, pair);
        const tokenA = await contract.methods.tokenA().call();
        const tokenB = await contract.methods.tokenB().call();
    
         console.log("Done!", tokenA, tokenB);

         return [tokenA, tokenB];

    }catch(ex){
        console.log(ex.message);
    }
}