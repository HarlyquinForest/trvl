import NextLink from "next/link";

const NavItem = ({ url, title }) => {
  return (
    <NextLink href={url}>
      <a className="text-lg p-2 font-light hover:underline underline-offset-8 decoration-4 hover:scale-105 transition-all ">
        {title}
      </a>
    </NextLink>
  );
};
export default NavItem;
