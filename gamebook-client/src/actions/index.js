import baseURL from "../api/baseURL";

export const register = (
  username,
  name,
  surname,
  email,
  password
) => async dispatch => {
  const response = await baseURL.post(
    "/auth/register",
    {
      username: username,
      name: name,
      surname: surname,
      email: email,
      password: password
    }
    //{ headers: { Authorization: localStorage.getItem("Authorization") } }
  );

  console.log(response);

  sessionStorage.setItem("Authorization", response.data.token);

  dispatch({ type: "REGISTER", payload: response.data });
};

export const login = (email, password) => async dispatch => {
  const response = await baseURL.post(
    "/auth/login",
    {
      email: email,
      password: password
    }
    //{ headers: { Authorization: localStorage.getItem("Authorization") } }
  );

  console.log(response);

  sessionStorage.setItem("Authorization", response.data.token);

  dispatch({ type: "LOGIN", payload: response.data });
};

export const getUser = () => async dispatch => {
  const response = await baseURL.get("/dashboard", {
    headers: { Authorization: sessionStorage.getItem("Authorization") }
  });

  dispatch({ type: "GET_USER", payload: response.data });
};
