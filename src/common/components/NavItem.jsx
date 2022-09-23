import NextLink from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ url, title }) => {
  const router = useRouter();
  return (
    <NextLink href={url}>
      <a
        className="text-lg p-2 font-light hover:underline underline-offset-8 decoration-4 hover:scale-105 transition-all "
        style={{
          textDecoration: router.pathname == url ? "underline" : "none",
        }}
      >
        {title}
      </a>
    </NextLink>
  );
};
export default NavItem;
