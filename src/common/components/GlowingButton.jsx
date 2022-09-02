import NextLink from "next/link";

const GlowingButton = ({ url, bgColor, icon, title }) => {
  return (
    <NextLink href={url}>
      <a
        className="flex flex-row justify-start items-center gap-6 w-fit p-4 px-8 rounded-lg font-bold text-sm xl:text-xl text-white  cursor-pointer hover:scale-105 transition-all"
        style={{
          backgroundColor: `${bgColor}`,
          boxShadow: `1px 9px 30px 0px ${bgColor}`,
        }}
      >
        {title}
        {icon}
      </a>
    </NextLink>
  );
};

export default GlowingButton;
