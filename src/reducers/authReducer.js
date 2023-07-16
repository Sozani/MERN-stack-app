const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH-START":
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};
