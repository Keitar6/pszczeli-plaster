import { IsModal, IsRefNotNull, IsRefNull } from "./modalCheck.typeGuards";
import { IsInputNull } from "./navInput.typeGuards";

describe("Types --> typeGuards", () => {
  test("modal", () => {
    const refNull = null;

    expect(IsRefNotNull(refNull)).toEqual(false);

    expect(IsRefNull(refNull)).toEqual(true);

    expect(IsModal(refNull)).toEqual(false);
  });
  test("navInput", () => {
    const refDiv: HTMLElement = document.createElement("div");
    const refNull = null;

    expect(IsInputNull(refDiv)).toEqual(true);
    expect(IsInputNull(refNull)).toEqual(false);
  });
});
