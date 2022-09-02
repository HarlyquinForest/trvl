import { SiYourtraveldottv } from "react-icons/si";
import NextLink from "next/link";
const Logo = () => {
  return (
    <NextLink href="/">
      <a className="flex flex-row gap-2 item-center text-2xl  text-white font-bold p-2 w-32 h-fit hover:scale-105 transition-all">
        <span>
          <SiYourtraveldottv />
        </span>
        TRVL
      </a>
    </NextLink>
  );
};
export default Logo;
