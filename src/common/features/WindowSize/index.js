import useWindowResize from "beautiful-react-hooks/useWindowResize";
import { useSelector, useDispatch } from "react-redux";
import { setWindowSmall, setWindowLarge, setWindowMedium } from "./WindowSlice";
import { useEffect } from "react";
const WindowSizeContext = ({ children }) => {
  const windowSize = useSelector((state) => state.windowSize.value);
  const dispatch = useDispatch();
  const onWindowResize = useWindowResize();

  const setWindowSize = (size) => {
    if (size < 768) dispatch(setWindowSmall());
    else if (size > 768 && size <= 1024) dispatch(setWindowMedium());
    else dispatch(setWindowLarge());
  };
  onWindowResize(() => {
    let currentSize = window.innerWidth;
    setWindowSize(currentSize);
  });
  useEffect(() => {
    let initialSize = window.innerWidth;
    setWindowSize(initialSize);
  }, []);
  return <>{children}</>;
};
export default WindowSizeContext;
