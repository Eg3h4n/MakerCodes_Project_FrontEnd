export default (state = {}, action) => {
  switch (action.type) {
    case "STEAM_LOGIN":
      return action.payload;
    default:
      return state;
  }
};
