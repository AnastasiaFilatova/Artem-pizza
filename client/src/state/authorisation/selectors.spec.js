const { getAuthorisation } = require("./selectors");

describe("getAuthorisation", () => {
  it("gets authorised from the state state", () => {
    const state = { authorised: false };
    expect(getAuthorisation(state)).toEqual(false);
  });
});
