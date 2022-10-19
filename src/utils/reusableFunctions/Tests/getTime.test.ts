import { getCurrentTime } from "../getTime.function";

describe("Reusable Functions --> getTime", () => {
  test("getTime", () => {
    const currentdate = new Date();

    expect(getCurrentTime()[0] + getCurrentTime()[1]).toEqual(
      `${currentdate.getDate()}`
    );

    expect(getCurrentTime()[3] + getCurrentTime()[4]).toEqual(
      `${currentdate.getMonth() + 1}`
    );
  });
});
