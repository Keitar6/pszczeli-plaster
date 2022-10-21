import { createElement, ReactNode, ReactPortal } from "react";
import ReactDOM from "react-dom";
import ComponentsRenderer from "react-test-renderer";
import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";
import Modal from "./modal.component";

describe("modal test", () => {
  const prevPortal = ReactDOM.createPortal;
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((node: ReactNode) => {
      return node as ReactPortal;
    });
  });
  test("portal test", () => {
    const component = renderWithProviders(<Modal>Hi</Modal>);
    expect(component.findByText("Hi")).toBeTruthy();
  });
  afterAll(() => {
    ReactDOM.createPortal = prevPortal;
  });
});
