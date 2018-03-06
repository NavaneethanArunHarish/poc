export default (state = [], action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          signupSuccess: action.signup.data,
          error: null
        }
      case 'SIGNUP_REJECTED':
  
      return {
          ...state,
          signupRejected: action.signup.data,
          error: null
        }

      case 'REGISTER_SUCCESS':
        
      return {
          ...state,
          registerSuccess: action.register.data,
          error: null
        }
      case 'REGISTER_REJECTED':
        
      return {
          ...state,
          registerRejected: action.register.data,
          error: null
        }
      default:
        return state;
    }
  };