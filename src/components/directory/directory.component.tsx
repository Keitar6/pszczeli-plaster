import { CategoriesHP } from "../Categories/categories.component";
import { DescriptionHP } from "../description/descriptionHP.component";
// import { Footer } from "../footer/footer.component";
import "./directory.styles.css";

export const Directory = () => {
  return (
    <div className="directory-container">
      <h2>Directory Component</h2>
      <h1>SLAJDY</h1>

      <CategoriesHP />
      <DescriptionHP />
    </div>
  );
};
