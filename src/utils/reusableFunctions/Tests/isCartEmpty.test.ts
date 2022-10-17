import { isCartEmpty } from "../isCartEmpty.function";

describe("Reusable Functions --> isCartEmpty", () => {

  test("isCartEmpty", () => {
    expect.assertions(3);
    expect(isCartEmpty(1)).toEqual(true);
    expect(isCartEmpty(15)).toEqual(true);
    expect(isCartEmpty(0)).not.toEqual(true);
  });
  
});
