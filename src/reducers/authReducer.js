const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH-START":
      return { ...state, loading: true, error: false };
    case "AUTH-SUCCESS":
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH-FAIL":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
