export const authReducer = (state = false, action) => {
  switch (action.type) {
    case "authorisation/set_authorised": {
      return action.payload;
    }
    default:
      return state;
  }
};
