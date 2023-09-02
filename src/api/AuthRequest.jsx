import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
axios
  .get("https://api.example.com/data")
  .then((response) => {
    // Handle successful response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error
    console.error("An error occurred:", error);
  });
