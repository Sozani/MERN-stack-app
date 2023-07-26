import { useAsyncError } from "react-router-dom";
import * as AuthApi from "../api/AuthRequest.jsx";
export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH-START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH-SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    dispatch({ type: "AUTH-FAIL" });
    console.log(error);
  }
};
export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH-START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH-SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    dispatch({ type: "AUTH-FAIL" });
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
