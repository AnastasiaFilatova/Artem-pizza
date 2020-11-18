const { renderHook } = require("@testing-library/react-hooks");
const { act } = require("react-dom/test-utils");
const { useArray } = require("./useArray");


describe("useArray", () => {
    it("uses empty array as default value", () => {
      const { result } = renderHook(() => useArray());
      expect(result.current[0]).toEqual([]);
    });

    describe("with initial value", () => {
      it("uses initial value as default", () => {
        const { result } = renderHook(() => useArray([1, 2, 3]));
        expect(result.current[0]).toEqual([1, 2, 3]);
      });
    });

    describe(".addItem", () => {
      it("adds the item to the state array", () => {
        const { result } = renderHook(() => useArray());

        act(() => {
          result.current[1]("test");
        });

        expect(result.current[0]).toEqual(["test"]);
      });
    });

    describe(".removeItem", () => {
        it("removes the item from the state array", () => {
          const { result } = renderHook(() => useArray(["test", "foo"]));
    
          act(() => {
            result.current[2]("test")
          })
    
          expect(result.current[0]).toEqual(["foo"]);
        });
      });
});

