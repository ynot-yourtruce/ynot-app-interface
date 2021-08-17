import { BigNumber } from "ethers";
import { approveERC20, getBalance } from "./erc20";
import { getToken } from "./pairPool";
import ORDER_BOOK_ABI from "../abis/OrderBook.json";
import { CONTRACT } from "../config";

export const placeOrder = async(token, orderAmount, web3, account) =>  {
    try{

        let amount = BigNumber.from(orderAmount).mul(BigNumber.from(10).pow(18));

        await approveERC20(token, CONTRACT.ORDEROOK, amount, web3, account);

        let contract = new web3.eth.Contract(ORDER_BOOK_ABI, CONTRACT.ORDEROOK);

        await contract.methods.addOrder(token, amount).send({from: account});

        console.log("Order Book")
    }catch(ex){
        console.log(ex.message);
    }
}

export const getDetails = async(pair, orderbook, web3) => {
    try{

        const balance0 = await getBalance(pair.tokens[0], orderbook, web3);
        const balance1 = await getBalance(pair.tokens[1], orderbook, web3);

        console.log("Order Book")

        return [
            {
                token: pair.tokens[0],
                info: pair.info[0],
                balance: balance0 / (10 ** 18)
            },
            {
                token: pair.tokens[1],
                info: pair.info[1],
                balance: balance1 / (10 ** 18)
            }
        ]
    }catch(ex){
        console.log(ex.message);
    }
}