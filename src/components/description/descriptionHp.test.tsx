import ComponentsRenderer from "react-test-renderer";
import { DescriptionHP } from "./descriptionHP.component";

describe("DescriptionHP", () => {
  test("DescriptionHPn", () => {
    const component = ComponentsRenderer.create(<DescriptionHP />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
