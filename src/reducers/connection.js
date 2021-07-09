import { CONNECTION_RESULT } from "../config/constants";

const initialState = {
  userConnection: null,
  userAccount: null,
  guestConnection: null,  
  loading: false,
  error: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case CONNECTION_RESULT:
            return {
                ...state,
                userConnection: action.web3,
                userAccount: action.account
            }
        default:
            return state;
    }
  }