import { ProductsList } from "./ProductsList";

export const Products = () => {
  return (
    <div className="mt-[52px]">
      <h1 className="flex flex-row uppercase justify-center font-medium text-[32px]">
        produkty
      </h1>
      <ProductsList />
    </div>
  );
};
