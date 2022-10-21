import CartIcon from "./cartIcon.component";
import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";
import { preload } from "../../utils/testsMocking/mockPreload";

describe("cartIcon", () => {
  test("cartIcon", () => {
    const container = renderWithProviders(<CartIcon />, {
      preloadedState: { ...preload }
    });
    expect(container.getByText("3")).toBeTruthy();
  });
});
