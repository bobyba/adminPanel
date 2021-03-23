const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const INITIALIZED_UNSUCCESS = "INITIALIZED_UNSUCCESS";
const UPDATE_POP = "UPDATE_POP";

let initialState = {
  initialStatus: false,
  statusPop: false,
};

const appInit = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialStatus: !state.initialStatus,
        statusPop: false,
      };
    case INITIALIZED_UNSUCCESS:
      return { ...state, initialStatus: false, statusPop: true };
    case UPDATE_POP:
      return { ...state, statusPop: false };
    default:
      return state;
  }
};
export const initialzedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initialzedUnSuccess = () => {
  return {
    type: INITIALIZED_UNSUCCESS,
  };
};

export const updatePop = () => {
  return {
    type: UPDATE_POP,
  };
};

export const initialAppThunk = (password) => async (dispatch) => {
  /* if (password === "AC15DAB5E0") {
    dispatch(initialzedSuccess());
  } else {
    dispatch(initialzedUnSuccess());
  } */

  

  setTimeout(() => {
    dispatch(updatePop());
  }, 1500);
};

export const setAuthThunk = () => async (dispatch) => {
  dispatch(initialzedSuccess());
};

export default appInit;
