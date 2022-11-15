import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href}>
      <li style={{ color: isActive ? "#070f80" : "#303030" }}>{children}</li>
    </Link>
  );
};
export default NavLink;
