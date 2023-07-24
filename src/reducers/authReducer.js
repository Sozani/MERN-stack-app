const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH-START":
      return { ...state, loading: true, error: false };
    case "AUTH-SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH-FAIL":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false };
    default:
      return state;
  }
};
export default authReducer;
