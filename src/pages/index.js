import Navbar from "../common/modules/Navbar";
import Background from "../common/modules/Background";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import useSwipeEvents from "beautiful-react-hooks/useSwipeEvents";
import { AnimatePresence, motion } from "framer-motion";
import { tourist_areas } from "../data/data";
import Carousel from "../common/modules/Carousel";
import Controlers from "../common/components/Controlers";
import GlowingButton from "../common/components/GlowingButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TopToDownSm } from "../common/components/Varients";

const Page = () => {
  const windowSize = useSelector((state) => state.windowSize.value);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(TopToDownSm.show);
  const [prev, setPrev] = useState(false);
  const timeoutRef = useRef(null);
  const slide = tourist_areas[index];
  var areas_lenght = tourist_areas.length;
  const ref = useRef();
  const { onSwipeLeft, onSwipeRight } = useSwipeEvents(ref);
  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }
  function startAnimation() {
    setAnimate(TopToDownSm.init);
    resetTimeout();
    timeoutRef.current = setTimeout(() => setAnimate(TopToDownSm.show), 100);
    return () => resetTimeout();
  }
  const nextClickHandler = () => {
    startAnimation();
    setIndex((prevIndex) =>
      prevIndex === areas_lenght - 1 ? 0 : prevIndex + 1
    );
    setPrev(false);
  };
  const beforeClickHandler = () => {
    startAnimation();
    setIndex((prevIndex) =>
      prevIndex === 0 ? areas_lenght - 1 : prevIndex - 1
    );
    setPrev(true);
  };
  onSwipeLeft(beforeClickHandler);
  onSwipeRight(nextClickHandler);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <meta name="theme-color" content="#95DF5A" />
        <link rel="shortcut icon" href="favicon.ico" />
        <title>صحفه اصلی - تور گردشگری </title>
      </Head>
      {tourist_areas.map((item, i) => (
        <Background img={item.country_img} active={index} keyProp={i} key={i} />
      ))}
      <Navbar />
      <AnimatePresence>
        <div className="w-full h-fit mt-2 xl:mt-12 font-vazir relative ">
          {windowSize === "lg" ? (
            <>
              <div className="gap-4 bg-dark-half-transparent firefox:bg-firefox-bg relative -z-10 inline-block p-8  w-8/12 h-screen max-h-[36rem] rounded-l-xl backdrop-blur-lg ">
                <motion.div
                  varients={TopToDownSm}
                  initial={TopToDownSm.init}
                  animate={animate}
                  exit={TopToDownSm.exit}
                >
                  <h1 className="text-2xl lg:text-6xl text-white ">
                    {slide.area_title}
                  </h1>
                </motion.div>
                <p className="text-sm lg:text-xl text-gray w-8/12 mt-6 text-justify">
                  {slide.country_desc}
                </p>
                <p className="text-sm lg:text-xl text-gray w-8/12 mt-6 text-justify">
                  {slide.area_desc}
                </p>
                <span className="mt-8 block ">
                  <GlowingButton
                    url="/"
                    bgColor="#95df5A"
                    title="انتخاب مقصد "
                    icon={<AiOutlineArrowLeft />}
                  />{" "}
                </span>
              </div>
              <Carousel
                slides={tourist_areas}
                slideCurrent={index}
                prev={prev}
                ref={ref}
              />
              <div className="flex flex-row justify-center items-center mt-6">
                <Controlers
                  beforeClickHandler={beforeClickHandler}
                  nextClickHandler={nextClickHandler}
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-11/12 h-fit overflow-x-hidden">
                <Carousel
                  slides={tourist_areas}
                  slideCurrent={index}
                  prev={prev}
                  ref={ref}
                />
              </div>
              <div className="flex flex-col justify-start items-start py-8 pt-[14rem] p-4 w-full h-fit mt-36 bg-dark-half-transparent firefox:bg-firefox-bg backdrop-blur-lg">
                <div className="flex flex-row justify-center items-center w-full mt-2">
                  <Controlers
                    beforeClickHandler={beforeClickHandler}
                    nextClickHandler={nextClickHandler}
                  />
                </div>

                <motion.div
                  varients={TopToDownSm}
                  initial={TopToDownSm.init}
                  animate={animate}
                  exit={TopToDownSm.exit}
                >
                  <p className="text-2xl text-white mt-4 text-justify">
                    {slide.area_title}
                  </p>

                </motion.div>
                <p className="text-lg text-gray mt-4 text-justify">
                  {slide.country_desc}
                </p>
                <p className="text-lg xl:text-xl text-gray mt-4 text-justify">
                  {slide.area_desc}
                </p>
                <span className="flex flex-col w-full justify-center items-center mt-4 ">
                  <GlowingButton
                    url="/"
                    bgColor="#95df5A"
                    title="انتخاب مقصد "
                    icon={<AiOutlineArrowLeft />}
                  />{" "}
                </span>
              </div>
            </>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Page;
