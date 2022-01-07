import {actionType} from "~/constants";

const {
    INIT_URL, 
    SIGNOUT_USER_SUCCESS, 
    USER_DATA, 
    USER_TOKEN_SET, 
    FORGOT_MAIL_SENT,
    PASSWORD_RESET,
    USER_VERIFIED,
    MAIL_RESENT,
    OPEN_AUTH
} = actionType;
  
  const INIT_STATE = {
    token: {}, //localStorage.getItem('token'),
    initURL: '/',
    verified: null,
    open: false,
    authUser: {}, //JSON.parse(localStorage.getItem('user')),
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
  
      case INIT_URL: {
        return {...state, initURL: action.payload};
      }
  
      case SIGNOUT_USER_SUCCESS: {
        return {
          ...state,
          token: null,
          verified: null,
          reset: null,
          authUser: null,
          ref: null,
          initURL: '/',
          mail_resent: null
        }
      }
  
      case USER_DATA: {
        return {
          ...state,
          authUser: action.payload,
          reset: null,
        };
      }
  
      case FORGOT_MAIL_SENT: {
        return {
          ...state,
          initURL: '/'
        }
      }
  
      case PASSWORD_RESET: {
        return {
          ...state,
          reset: true,
          //initURL: '/'
        }
      }
  
      case USER_TOKEN_SET: {
        return {
          ...state,
          token: action.payload,
        };
      }
  
      case USER_VERIFIED: {
        return {
          ...state,
          verified: action.payload,
        };
      }
  
      case MAIL_RESENT: {
        return {
          ...state,
          mail_resent: action.payload,
        };
      }
  
      case OPEN_AUTH: {
        return {
          ...state,
          open: action.payload,
        };
      }
  
      default:
        return state;
    }
  }
  