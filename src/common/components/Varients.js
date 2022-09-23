export const TopToDownSm = {
  init: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};
export const TopToDownLg = {
  init: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
export const RotateToChange = {
  init: { opacity: 0, rotate: 90 },
  active: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 90 },
};
export const FadeToExist = {
  show: { display: "block", opacity: 1, transition: { duration: 0.5 } },
  init: { display: "none", opacity: 0.5 },
  exit: { display: "none", opacity: 0 },
};
export const TopToDownChange = {
  init: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { delay: 0.2 } },
  exit: { y: 20, opacity: 0, display: 'none', transition: { duration: 0.2 } },
}
