import { useState, useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";
import Rating from "../components/Star";
import Slide from "../components/Slide";

const Carousel = forwardRef((props, ref) => {
  const windowSize = useSelector((state) => state.windowSize.value);
  const [slideTotal, setSlideTotal] = useState(0);
  const [slides, setSlides] = useState([]);
  const [queue, setQueue] = useState([]);
  const [play, setPlay] = useState(false);
  const gap = windowSize === 'md' || windowSize === 'sm' ? '230' : 280
  const styles = {
    deactive: "absolute -z-10 top-0 w-fit scale-90 transition-all ",
    active: "absolute z-0 top-0 right-0 w-fit scale-105 transition-all ",
  };
  async function playNextSlide() {
    if (props.prev) queue.unshift(queue.pop());
    else queue.push(queue.shift());
    for (var i = 0; i < slideTotal; i++) {
      var x = queue.indexOf(i) === 0 ? 0 : gap * queue.indexOf(i);
      if (slides[i].id == props.slideCurrent) {
        slides[i].class = styles.active;
        slides[i].style = {};
      } else {
        slides[i].class = styles.deactive;
        slides[i].style = { right: `${x}px` };
      }
    }
    setPlay(false);
  }
  useEffect(() => {
    const locSlides = [];
    var locQueue = [];
    var index = 0;
    props.slides.forEach((slide) => {
      var x = index === 0 ? 0 : gap * index;
      var slideobject = {
        id: index,
        class: index === 0 ? styles.active : styles.deactive,
        style: { right: `${x}px` },
        element: slide,
      };
      locQueue.push(index);
      index += 1;
      locSlides.push(slideobject);
    });
    setSlides(locSlides);
    setSlideTotal(index);
    setQueue(locQueue);
  }, [props.slides]);

  useEffect(() => {
    if (slideTotal !== 0) {
      setPlay(true);
    }
  }, [props.slideCurrent]);
  useEffect(() => {
    if (play) playNextSlide().then();
  }, [play]);

  return (
    <div
      className="absolute inline-block top-0 right-[23%] lg:right-[60%] w-full mr-0 "
      ref={ref}
    >
      {slides && (
        <div className="relative z-10 right-0 top-6 w-full h-fit transition-all">
          <div className="absolute w-full transition-all">
            <div className="flex justify-start items-center w-full">
              {slides.map((slider, index) => (
                <div className={slider.class} style={slider.style} key={index}>
                  <Slide img={slider.element.area_img} key={index}>
                    <p className="text-xl text-white font-vazir">
                      {slider.element.country_name}
                    </p>
                    <Rating rate={slider.element.rate} />
                  </Slide>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
export default Carousel;
