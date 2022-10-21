import { mockStore } from "../../../utils/testsMocking/mockStore";
import { ReduxState } from "../../rootReducer.redux";
import { USER_INITIAL_STATE } from "../user.reducer";
import {
  selectCurrentUser,
  selectSort,
  selectUserReducer
} from "../user.selector";

describe("Selectors - UserReducer", () => {
  test("selectUserReducer", () => {
    expect(selectUserReducer(mockStore as ReduxState)).toEqual(
      USER_INITIAL_STATE
    );
  });

  test("selectCurrentUser", () => {
    const expectedOutput = {};
    expect(selectCurrentUser.resultFunc(USER_INITIAL_STATE)).toEqual(
      expectedOutput
    );
  });

  test("selectSort", () => {
    const expectedOutput = {
      sorType: "alphabetic",
      inputSort: "",
      ascending: true
    };
    expect(selectSort.resultFunc(USER_INITIAL_STATE)).toEqual(expectedOutput);
  });
});
