import { CONTRACT } from "../config";
import GENESIS from "../abis/Genesis.json";
import FACTORY from "../abis/YNOTFactory.json";


export const createPair = async(token0, token1, web3, account) =>  {
    try{
        let contract = new web3.eth.Contract(GENESIS, CONTRACT.GENESIS);
        await contract.methods.createNewPair(token0, token1).send({from: account});
        console.log("Done!")
    }catch(ex){
        console.log(ex.message);
    }
}

export const createPairFactory = async(token0, token1, web3, account) =>  {
    try{
        let contract = new web3.eth.Contract(FACTORY, CONTRACT.FACTORY);
        await contract.methods.createAPair(token0, token1).send({from: account});
        console.log("Factory: Pool Created")
    }catch(ex){
        console.log(ex.message);
    }
}


export const getPools = async(web3, account) =>  {
    try{
        let contract = new web3.eth.Contract(FACTORY, CONTRACT.FACTORY);
        let pools = await contract.methods.getAllPools().call();
        console.log("Done!", pools)
    }catch(ex){
        console.log("Error:", ex.message);
    }
}

export const setFactory = async(web3, account) =>  {
    try{
        let contract = new web3.eth.Contract(GENESIS, CONTRACT.GENESIS);
        await contract.methods.setFactory(CONTRACT.FACTORY).send({from: account});
        console.log("Done!")
    }catch(ex){
        console.log(ex.message);
    }
}