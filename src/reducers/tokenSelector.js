import { SELECT_PAIR, SELECT_TOKEN } from "../config/constants";
import tokenList from "../config/tokenList.json";
import pairList from "../config/pairList.json";

const initialState = {
  tokenA: null,
  tokenB: null,
  pair: null,
  tokenList: tokenList,
  pairList: pairList,
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
        case SELECT_PAIR:
          return {
            ...state,
            pair: action.pair
          }
        default:
            return state;
    }
  }