import { SlidingMenu } from "./SlidingMenu";
import { PopularCategories } from "./PopularCategories/PopularCategories";
// import { Products } from "./Products/Products";

export const Home = () => {
  return (
    <div className="mb-[69px]">
      <SlidingMenu />
      <PopularCategories />
      {/* <Products /> */}
    </div>
  );
};
