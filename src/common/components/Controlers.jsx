import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Controlers = ({ beforeClickHandler, nextClickHandler }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 w-fit">
      <span
        onClick={nextClickHandler}
        className="text-4xl text-gray h-fit w-fit p-2 rounded-full bg-dark-half-transparent cursor-pointer"
      >
        <MdNavigateNext />
      </span>
      <span
        onClick={beforeClickHandler}
        className="text-4xl text-gray h-fit w-fit p-2 rounded-full bg-dark-half-transparent cursor-pointer"
      >
        <MdNavigateBefore />
      </span>
    </div>
  );
};
export default Controlers;
