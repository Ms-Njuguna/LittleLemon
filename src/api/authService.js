import API from "./axios";

// LOGIN
export const loginUser = async (data) => {
  const response = await API.post("/auth/login/", data);
  return response.data;
};

// SIGNUP
export const signupUser = async (data) => {
  const response = await API.post("/auth/signup/", data);
  return response.data;
};

// GET CURRENT USER
export const getMe = async () => {
  const response = await API.get("/me/");
  return response.data;
};