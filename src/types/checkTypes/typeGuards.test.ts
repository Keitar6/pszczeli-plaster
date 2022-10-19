import React from "react";
import { IsModal, IsRefNotNull, IsRefNull } from "./modalCheck.typeGuards";
import { IsInputNull } from "./navInput.typeGuards";
jest.mock("react", () => {
  return {
    ...jest.requireActual("react"),
    useRef: jest.fn()
  };
});

describe("Types --> typeGuards", () => {
  test("modal", () => {
    const refNull = React.useRef(null);

    const refNullModal = null;

    expect(IsRefNotNull(refNull)).toEqual(false);

    expect(IsRefNull(refNull)).toEqual(true);

    expect(IsModal(refNullModal)).toEqual(false);
  });
  test("navInput", () => {
    const refDiv: HTMLElement = document.createElement("div");
    const refNull = null;

    expect(IsInputNull(refDiv)).toEqual(true);
    expect(IsInputNull(refNull)).toEqual(false);
  });
});
