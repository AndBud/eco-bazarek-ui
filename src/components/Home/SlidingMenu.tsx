import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import HomeImage from "../../assets/hero-image.png";

export const SlidingMenu = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative max-w-[1366px]">
        <img src={HomeImage} className="max-h-[640px] max-w-[1366px]"></img>
        <div className="absolute left-[25%] top-[221px] z-10">
          <h2 className="font-sans font-black text-white text-5xl uppercase z-10">
            Świeże owoce i warzywa
          </h2>
        </div>
        <div className="absolute left-[42px] top-[50%] z-10">
          <button className="bg-white text-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <ChevronLeftIcon className="h-10 w-10 text-black" />
          </button>
        </div>
        <div
          className="absolute left-[45%] top-[50%] z-10
        uppercase text-bazarek-green-main text-sm font-sans
        bg-white h-[42px] w-[134px] text-center
        rounded-sm"
        >
          <p className="mt-[10px]">produkty</p>
        </div>
        <div className="absolute right-[42px] top-[50%] z-10">
          <button className="bg-white text-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <ChevronRightIcon className="h-10 w-10 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
