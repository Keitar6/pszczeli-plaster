import { Footer } from "../footer.component";
import ComponentsRenderer from "react-test-renderer";
describe("Footer", () => {
  test("footerAboutUs", () => {
    const text = ComponentsRenderer.create(<Footer></Footer>).toJSON();
    expect(text).toMatchSnapshot();
  });
});
