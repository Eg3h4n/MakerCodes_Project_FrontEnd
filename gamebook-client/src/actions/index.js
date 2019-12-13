import baseURL from "../api/baseURL";
import { push } from "connected-react-router";

/* var token = "";
token = sessionStorage.getItem("Authorization"); */

export const register = (
  username,
  name,
  surname,
  email,
  password,
  userToken
) => async dispatch => {
  const response = await baseURL.post(
    "/auth/register",
    {
      username: username,
      name: name,
      surname: surname,
      email: email,
      password: password
    },
    { headers: { Authorization: userToken } }
  );

  //console.log(response);

  await sessionStorage.setItem("Authorization", response.data.token);

  dispatch({ type: "REGISTER", payload: response.data });
  dispatch(push("/dashboard"));
};

export const login = (email, password, userToken) => async dispatch => {
  //console.log(sessionStorage.getItem("Authorization"));

  const response = await baseURL.post(
    "/auth/login",
    {
      email: email,
      password: password
    },
    { headers: { Authorization: userToken } }
  );

  //console.log(response);

  await sessionStorage.setItem("Authorization", response.data.token);

  dispatch({ type: "LOGIN", payload: response.data });
  dispatch(push("/dashboard"));
};

export const steamLogin = () => async dispatch => {
  const response = await baseURL.get("/auth/steam");

  dispatch({ type: "STEAM_LOGIN", payload: response });
};

export const getUser = userToken => async dispatch => {
  const response = await baseURL.get("/dashboard", {
    headers: { Authorization: userToken }
  });

  dispatch({ type: "GET_USER", payload: response.data });
};

export const updateUser = (data, userToken) => async dispatch => {
  const response = await baseURL.put("/dashboard", data, {
    headers: { Authorization: userToken }
  });
  //console.log(response.data);

  dispatch({ type: "UPDATE_USER", payload: response.data });
  dispatch(getUser(userToken));
};

export const getProfile = (username, userToken) => async dispatch => {
  const response = await baseURL.get(`/profile/${username}`, {
    headers: { Authorization: userToken }
  });

  //console.log(response.data);

  dispatch({ type: "GET_PROFILE", payload: response.data });
};

export const getGames = () => async dispatch => {
  const response = await baseURL.get("/games");

  dispatch({ type: "GET_GAMES", payload: response.data });
};

export const getAllUsers = userToken => async dispatch => {
  const response = await baseURL.get("/profile", {
    headers: { Authorization: userToken }
  });

  dispatch({ type: "GET_ALL_USERS", payload: response.data });
};
