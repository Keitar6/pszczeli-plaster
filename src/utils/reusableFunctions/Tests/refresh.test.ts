import "jest-location-mock";
import { refresh } from "../refresh.function";

describe("Reusable Functions --> refresh", () => {
  const mockLocation = "http://localhost/";
  const mockLocation2 = "http://localhost/sklep";
  const location = window.location;

  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: { href: mockLocation, reload: () => jest.fn() }
    });
  });

  test("refresh no input", () => {
    expect.assertions(1);

    expect(refresh()).toBe("Refreshed");
  });

  test("refresh input", () => {
    Object.defineProperty(window, "location", {
      value: { href: mockLocation2, reload: () => jest.fn() }
    });
    expect(refresh("sklep")).toBe("Refreshed");
    expect(refresh("podsumowanie")).not.toBe("Refreshed");
  });

  afterEach(() => {
    window.location = location;
  });
});
