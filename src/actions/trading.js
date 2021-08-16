import { BigNumber } from "ethers";
import { approveERC20 } from "./erc20";
import { getToken } from "./pairPool";
import ORDER_BOOK_ABI from "../abis/OrderBook.json";
import { CONTRACT } from "../config";

export const placeOrder = async(token, web3, account) =>  {
    try{

        let amount = BigNumber.from(500).mul(BigNumber.from(10).pow(18));

        await approveERC20(token, CONTRACT.ORDEROOK, amount, web3, account);

        let contract = new web3.eth.Contract(ORDER_BOOK_ABI, CONTRACT.ORDEROOK);

        await contract.methods.addOrder(token, amount).send({from: account});

        console.log("Order Book")
    }catch(ex){
        console.log(ex.message);
    }
}