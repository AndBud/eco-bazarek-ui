import { ChevronUpIcon } from "@heroicons/react/24/outline";

export const FloatingButton = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <button
        className="bg-bazarek-green-main text-white rounded-full w-10 h-10 flex items-center justify-center"
        onClick={backToTop}
      >
        <ChevronUpIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};
