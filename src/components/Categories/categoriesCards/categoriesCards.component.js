import { PLarge } from "../../../global.styles";

export const CategoryCard = ({category}) => {
  const { title } = category;
  console.log(category)
  return (
    <div>
      {/* {children} */}
      <PLarge className="categoi">{title}</PLarge>
    </div>
  );
};
