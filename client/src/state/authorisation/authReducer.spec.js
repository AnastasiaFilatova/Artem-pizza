const { authReducer } = require("./AuthReducer");

describe("authorisation/set_authorised", () => {
  it("sets authorised to true", () => {
    const initialState = false;
    const action = {
      type: "authorisation/set_authorised",
      payload: true,
    };
    expect(authReducer(initialState, action)).toEqual(true);
  });
});
