const Slide = ({ children, img }) => {
  return (
    <div className="flex flex-col-reverse items-center xl:flex-col xl:items-start justify-center relative left-0 top-0 w-fit h-fit">
      {children}
      <div
        className="w-[120px] h-[180px] lg:w-[250px] lg:h-[430px] xl:w-[270px] xl:h-[29rem] rounded-xl shadow-lg "
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
