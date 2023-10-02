import { CategoryTop } from "./CategoryTop";
export const PopularCategories = () => {
  return (
    <div className="mt-[52px]">
      <h1 className="flex flex-row uppercase justify-center font-medium text-[32px]">
        popularne kategorie
      </h1>
      <CategoryTop />
    </div>
  );
};
