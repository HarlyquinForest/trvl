import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Star = ({ active }) => {
  return (
    <>
      {active ? (
        <span className="text-xl text-star">
          <AiFillStar />
        </span>
      ) : (
        <span className="text-xl text-star">
          <AiOutlineStar />
        </span>
      )}
    </>
  );
};

const Rating = ({ rate }) => {
  let stars = [];
  for (var i = 0; i < 5; i++) {
    if (rate > 0) stars.push(<Star active={true} key={i} />);
    else stars.push(<Star active={false} key={i} />);
    rate -= 1;
  }
  return (
    <div className="flex flex-row gap-1 justify-start items-center w-fit h-fit">
      {stars}
    </div>
  );
};

export default Rating;
