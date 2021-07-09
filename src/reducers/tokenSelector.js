import { SELECT_TOKEN } from "../config/constants";
import tokenList from "../config/tokenList.json";

const initialState = {
  tokenA: null,
  tokenB: null,  
  tokenList: tokenList,
  loading: false,
  error: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
      case SELECT_TOKEN:
        return {
          ...state,
          [action.tokenType] : action.token
        }
        default:
            return state;
    }
  }