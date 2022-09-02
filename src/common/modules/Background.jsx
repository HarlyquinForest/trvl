import { base_path_prefix } from "../utils/helper/prefix.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FadeToExist } from "../components/Varients";

const Background = ({ img, active, keyProp }) => {
  const [animate, setAnimate] = useState(FadeToExist.init);
  useEffect(() => {
    if (active == keyProp) setAnimate(FadeToExist.show);
    else setAnimate(FadeToExist.init);
  }, [active]);
  return (
    <AnimatePresence>
      <motion.div
        key={keyProp}
        varients={FadeToExist}
        initial={FadeToExist.init}
        animate={animate}
        exti={FadeToExist.exit}
        className="w-full h-full -z-10 absolute overflow-y-hidden"
        style={{
          backgroundImage: `url(${base_path_prefix}${img})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="fading-black-gradient w-full h-screen"></div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Background;
