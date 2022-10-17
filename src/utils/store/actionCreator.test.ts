import { actionCreator } from "./store.utils";

describe("dag", () => {
  test("actionCreator Test", () => {
    expect(actionCreator("SuperType")).toEqual({ type: "SuperType" });

    expect(
      actionCreator("SuperType", { cola: "cola", baklazan: "Baklazan? wtf?" })
    ).toEqual({
      type: "SuperType",
      payload: { cola: "cola", baklazan: "Baklazan? wtf?" }
    });
  });
});
