import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { RotateToChange, TopToDownLg } from "./Varients";
const Search = () => {
  const [menu, setMenu] = useState(false);
  const inputRef = useRef(" ");
  const handleClick = () => {
    setMenu(!menu);
  };
  const clearInput = () => {
    inputRef.current.value = "";
  };
  return (
    <>
      <span
        className="h-fit block rounded-full cursor-pointer text-xl p-1 lg:p-2 bg-white text-black hover:scale-105"
        onClick={handleClick}
      >
        {menu ? (
          <motion.div
            key="close-button"
            varients={RotateToChange}
            initial={RotateToChange.init}
            animate={RotateToChange.active}
            exit={RotateToChange.exit}
          >
            <AiOutlineClose />
          </motion.div>
        ) : (
          <motion.div
            key="search-button"
            varients={RotateToChange}
            initial={RotateToChange.init}
            animate={RotateToChange.active}
            exit={RotateToChange.exit}
          >
            <AiOutlineSearch />
          </motion.div>
        )}
      </span>
      {menu && (
        <motion.div
          key="search-layout"
          varients={TopToDownLg}
          initial={TopToDownLg.init}
          animate={TopToDownLg.show}
          exit={TopToDownLg.exit}
          className="absolute block z-20 p-4 w-full lg:w-1/2 max-h-screen rounded-lg left-0 lg:left-32 top-16 bg-dark-half-transparent firefox:bg-firefox-modal-bg backdrop-blur-lg shadow-lg"
        >
          <div className="flex flex-col justify-start gap-8 items-start text-sm">
            <div className="flex flex-row gap-4 w-full px-2">
              <input
                type="text"
                placeholder="برای جستجو تایپ کنید ... "
                name="search-input"
                className="bg-transparent focus:outline-none w-full"
                value={inputRef.current && inputRef.current.value}
                ref={inputRef}
              />
              <span
                onClick={clearInput}
                className="h-fit p-2 rounded-full hover:bg-half-transparent cursor-pointer"
              >
                <MdClear />
              </span>
            </div>
            <p className="text-sm text-stone-500">نتایج یافت شده</p>
            <div className="flex flex-col gap-4 pr-4 w-full overflow-y-auto">
              <p>Item 1 </p>
              <p>Item 2 </p>
              <p>Item 3 </p>
              <p>Item 4 </p>
              <p>Item 5 </p>
              <p>Item 6 </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default Search;
