import {calculatePrice} from './calculatePrice'

describe("calculatePrice", () => {
    it("Returns the sum of all the selected ingridients", () => {
        expect(calculatePrice({
            size: "30cm",
            base: "thin",
            sauces: ["tomato"],
            cheeses: ["mozarella"],
            vegetables: ["pepper"],
            meats: ["ham"]
        })).toEqual(287)
    })
})