import Web3 from "web3";
import { ALLOWED_NETWORK_ID } from "../config";
import { CONNECTION_RESULT } from "../config/constants";

export const connectWallet = () => async dispatch =>  {
    
        try {
            const web3 = new Web3(window.ethereum);
            var chainId = parseInt(window.ethereum.chainId, 16);
            if(chainId != ALLOWED_NETWORK_ID){
                alert("Please change your network from "+ chainId +" to " + ALLOWED_NETWORK_ID)
                throw Error;
            }
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            var accounts = await web3.eth.getAccounts();

            dispatch({type: CONNECTION_RESULT, web3: web3, account: accounts[0]});
        } catch (error) {
            console.error(error);
        }
}

export const checkIfAlreadyConnected = () => async dispatch => {

    if (window.ethereum) {
        try{
            const web3 = new Web3(window.ethereum);
            var accounts = await web3.eth.getAccounts();
            if(accounts.length > 0){
                console.log("Connected");
                dispatch({type: CONNECTION_RESULT, web3: web3, account: accounts[0]});
            }else{
                console.log("Not Connected");
            }
        }catch (error) {
            console.log("Error from checkIfAlreadyConnected", error.message);
        }
    }
}