import { useState } from "react";
import { categoriesTop } from "../../../api";

export const CategoryTop = () => {
  let displayData;
  const [categories, setCategories] = useState();
  categoriesTop().then((value) => {
    displayData = value.map((category: any) => (
      <li
        key={category.id}
        className="h-[160px] w-[160px] bg-white border-bazarek-border-base rounded-[19px] mt-[18px] ml-"
      >
        <img className="mt-8 ml-12 w-[64px]" src={category.iconUrl}></img>
        <p className="mt-[15px] text-center text-sm">{category.name}</p>
      </li>
    ));
    setCategories(displayData);
  });
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-5 w-[868px] justify-center mt-[20px]">
        {categories}
      </ul>
    </div>
  );
};
