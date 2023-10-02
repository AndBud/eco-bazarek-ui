import { useState } from "react";
import { productsList } from "../../../api";

export const ProductsList = () => {
  let displayData;
  const [products, setProducts] = useState();
  productsList().then((value) => {
    displayData = value.map((category: any) => (
      <li
        key={category.id}
        className="h-[275px] w-[249px] bg-white border-bazarek-border-base rounded-[19px] mt-[18px] ml-"
      >
        <img className="mt-8 ml-12 w-[64px]" src={category.iconUrl}></img>
        <p className="mt-[15px] text-center text-sm">{category.name}</p>
      </li>
    ));
    setProducts(displayData);
  });
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-4 w-[868px] justify-center mt-[20px]">
        {products}
      </ul>
    </div>
  );
};
