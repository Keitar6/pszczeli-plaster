import { FC } from "react";
import { H1, H2 } from "../../global.styles";
import { CategoriesHP } from "../categories/categories.component";
import { DescriptionHP } from "../description/descriptionHP.component";
import { DirectoryContainer } from "./directory.styles";

export const Directory:FC = () => {

  return (
    <DirectoryContainer>
      <H2>Directory Component</H2>
      <H1>SLAJDY</H1>

      <CategoriesHP />

      <DescriptionHP />
    </DirectoryContainer>
  );
};
