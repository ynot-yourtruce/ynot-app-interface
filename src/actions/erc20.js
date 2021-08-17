import ERC20 from "../abis/ERC20.json";

export const approveERC20 = async(token_address, spender, amount, web3, account) =>  {
    try{
        let contract = new web3.eth.Contract(ERC20, token_address);
        await contract.methods.approve(spender, amount).send({from: account});
        console.log("Done!");
    }catch(ex){
        console.log(ex.message);
    }
}


export const getBalance = async(token_address, user, web3) => {

     try{
        let contract = new web3.eth.Contract(ERC20, token_address);
        const balance = await contract.methods.balanceOf(user).call();
        
        return balance;
    }catch(ex){
        console.log(ex.message);
    }   
}