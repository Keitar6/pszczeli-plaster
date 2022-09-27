import { FC, PropsWithChildren } from "react";

type ProductCardProps = {
  id: string;
  name: string;
  dodatki?: boolean;
  image: string;
  price: number;
};

export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = ({
  id,
  name,
  dodatki,
  image,
  price
}) => {
  return (
    <div>
      <span>Product Card</span>
      <div></div>
    </div>
  );
};
