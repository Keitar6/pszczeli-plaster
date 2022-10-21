import ComponentsRenderer from "react-test-renderer";
import { AboutUs } from "../footerAboutUs/footerAboutUs.component";
import React from "react";
import { PayDeliver } from "../footerPayDeliver/footerPayDeliver.component";
import { Info } from "../footerInfo/footerInfo.component";
import { MyAccount } from "../footerMyAccount/footerMyAccount.component";

describe("Footer", () => {


  test("footerAboutUs", () => {
    const text = ComponentsRenderer.create(<AboutUs></AboutUs>).toJSON();
    expect(text).toMatchSnapshot();
  });
  test("footerInfo", () => {
    const text = ComponentsRenderer.create(<Info></Info>).toJSON();
    expect(text).toMatchSnapshot();
  });
  test("footerMyAccount", () => {
    const text = ComponentsRenderer.create(<MyAccount></MyAccount>).toJSON();
    expect(text).toMatchSnapshot();
  });
  test("footerPayDeliver", () => {
    const text = ComponentsRenderer.create(<PayDeliver></PayDeliver>).toJSON();
    expect(text).toMatchSnapshot();
  });

  //
});
