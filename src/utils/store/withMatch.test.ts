import type { AnyAction } from "redux";
import { withMatch } from "./store.utils";
const mockAction = {
  type: "dobryTyp",
  payload: 13
};

test("withMatchUseCase Test", () => {
  const mochActionError = withMatch((error: Error) => ({
    type: "dobryTyp",
    payload: error
  }));

  const mochActionArray = withMatch((Array: number[]) => ({
    type: "dobryTyp",
    payload: Array
  }));

  expect(mochActionError(Error as any)).toEqual({
    type: "dobryTyp",
    payload: Error
  });

  expect(mochActionArray([1, 2, 3, 4, 5, 6])).toEqual({
    type: "dobryTyp",
    payload: [1, 2, 3, 4, 5, 6]
  });
});
test("withMatchReturn Test", () => {
  const mockActionACFunction = () => mockAction;

  expect(withMatch(mockActionACFunction)).toEqual(
    Object.assign(mockActionACFunction, {
      match(action: AnyAction) {
        return action.type === mockActionACFunction().type;
      }
    })
  );
});
