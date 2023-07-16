import * as AuthApi from "../api/AuthRequest.jsx";
export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH-START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH-SUCCESS", data: data });
  } catch (error) {
    console.log(error);
  }
};
