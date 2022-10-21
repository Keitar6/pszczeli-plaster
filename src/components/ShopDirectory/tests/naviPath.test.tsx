import { waitFor } from "@testing-library/react";
import { GENERAL_PROPS_ACTION_TYPES } from "../../../store/generalPropReducer/generalProp.types";
import * as Refresh from "../../../utils/reusableFunctions/refresh.function";
import { preload } from "../../../utils/testsMocking/mockPreload";
import { renderWithProviders } from "../../../utils/testsMocking/mockStoreProvider";
import { NaviPath } from "../shopNavi/naviPath.component";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));
const refreshSpy = jest.spyOn(Refresh, "refresh");

const mockParamsData = {
  id: "elo"
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockParamsData
}));

describe("NaviPath", () => {
  const component = () =>
    renderWithProviders(
      <>
        <NaviPath />
      </>,

      {
        preloadedState: {
          ...preload
        }
      }
    );
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test("refresHandler", () => {
    const refresh = component().getByTestId("refresh");
    expect(refresh).toBeTruthy();
    const spyOnComponent = jest.spyOn(refresh, "click");
    refresh.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(refreshSpy).toHaveBeenCalled();
  });

  test("useEffect dispatch path", async () => {
    mockParamsData.id = "elo";
    component();

    await waitFor(() =>
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        payload: mockParamsData.id,
        type: GENERAL_PROPS_ACTION_TYPES.SET_PATH
      })
    );
  });

  test("useEffect dispatch 'sklep'", async () => {
    mockParamsData.id = "/undefined";
    component();

    await waitFor(() =>
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        payload: "sklep",
        type: GENERAL_PROPS_ACTION_TYPES.SET_PATH
      })
    );
  });
});
