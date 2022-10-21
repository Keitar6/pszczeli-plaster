import ComponentsRenderer from "react-test-renderer";
import Spinner from "./spinner.component";

describe("Spinner", () => {
  test("spinner", () => {
    const spinner = ComponentsRenderer.create(<Spinner />).toJSON();
    expect(spinner).toMatchSnapshot();
  });
});
