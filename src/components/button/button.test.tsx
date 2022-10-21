import ComponentsRenderer from "react-test-renderer";

import Button, { BUTTON_TYPE_CLASSES, getButton } from "./button.component";
import { BaseButton } from "./button.styles";

describe("Buttons", () => {
  test("buttonType - BaseButton", () => {
    const button = ComponentsRenderer.create(
      <Button buttonType={BUTTON_TYPE_CLASSES.base} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test("buttonType - productCardButton", () => {
    const button = ComponentsRenderer.create(
      <Button buttonType={BUTTON_TYPE_CLASSES.productCard}></Button>
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test("getButton", () => {
    expect(getButton(undefined)).toEqual(BaseButton);
  });
});
