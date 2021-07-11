import { SELECT_PAIR, SELECT_TOKEN } from "../config/constants"

export const selectToken = (tokenType, token) => async dispatch =>  {
    dispatch({type: SELECT_TOKEN, tokenType: tokenType, token: token});
}

export const selectPair = (pair) => async dispatch =>  {
    dispatch({type: SELECT_PAIR, pair: pair});
}