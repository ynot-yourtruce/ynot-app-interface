import { CONTRACT } from "../config";
import ROUTER from "../abis/Router.json";

export const getAmountsOut = async(path, amount, web3) =>  {
    try{

        // const tokens = await getToken(pair, web3);

        // await approveERC20(tokens[0], pair, 100, web3, account);
        // await approveERC20(tokens[1], pair, 100, web3, account);

        let contract = new web3.eth.Contract(ROUTER, CONTRACT.ROUTER);
        const amountOut = await contract.methods.getAmountsOut(path, amount).call();

        return amountOut;
    }catch(ex){
        console.log(ex.message);
    }
}