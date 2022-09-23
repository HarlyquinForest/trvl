const Slide = ({ children, img }) => {
  return (
    <div className="flex flex-col-reverse items-center gap-1 lg:flex-col lg:items-start justify-center relative left-0 top-0 w-fit h-fit">
      {children}
      <div
        className="w-[200px] h-[250px] lg:w-[270px] lg:h-[29rem] rounded-xl shadow-lg "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      />
    </div>
  );
};
export default Slide;
