import NavItem from "../components/NavItem";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Search from "../components/Search";
import {
  TopToDownSm,
  RotateToChange,
  TopToDownLg,
} from "../components/Varients";

const Navbar = () => {
  const windowSize = useSelector((state) => state.windowSize.value);
  const [menu, setMenu] = useState(false);
  const handleClickMenu = () => {
    setMenu(!menu);
  };
  return (
    <AnimatePresence>
      <motion.div
        varients={TopToDownSm}
        initial={TopToDownSm.init}
        animate={TopToDownSm.show}
        exit={TopToDownSm.exit}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-row justify-between items-center w-full gap-2 py-4 px-6 top-0 lg:px-32 font-vazir text-white bg-transparent">
          <Logo />
          {windowSize == "lg" ? (
            <>
              <div className="flex flex-row justify-center gap-20 w-8/12">
                <NavItem url="/news" title="اخبار" />
                <NavItem url="/tours" title="تورها" />
                <NavItem url="/blog" title="وبلاگ" />
                <NavItem url="/contact" title="تماس" />
              </div>
              <div className="flex flex-row justify-between items-center gap-4 px-4 w-fit ">
                <Search />
                <NavItem url="/login" title="ورود/ثبت نام" />
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-row gap-4 items-center  justify-between z-20">
                <Search />
                <span
                  className="p-2 block h-fit bg-transparent z-40 text-2xl hover:bg-half-transparent cursor-pointer rounded-full"
                  onClick={handleClickMenu}
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
                      key="menu-button"
                      varients={RotateToChange}
                      initial={RotateToChange.init}
                      animate={RotateToChange.active}
                      exit={RotateToChange.exit}
                    >
                      <AiOutlineMenu />
                    </motion.div>
                  )}
                </span>
                {menu && (
                  <motion.div
                    key="mobile-menu"
                    varients={TopToDownLg}
                    initial={TopToDownLg.init}
                    animate={TopToDownLg.show}
                    exit={TopToDownLg.exit}
                    className="absolute z-20 w-full h-full top-0 right-0 bg-dark-half-transparent firefox:bg-black backdrop-blur-lg"
                  >
                    <div className="flex flex-col justify-center items-center mt-10 py-6">
                      <NavItem url="/news" title="اخبار" />
                      <NavItem url="/tours" title="تورها" />
                      <NavItem url="/blog" title="وبلاگ" />
                      <NavItem url="/contact" title="تماس" />
                      <NavItem url="/login" title="ورود/ثبت نام" />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Navbar;
