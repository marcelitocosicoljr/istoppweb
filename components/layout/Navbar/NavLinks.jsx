import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href} style={{textDecoration:'none'}}>
      <li className="navLink" style={{ color: isActive ? "#070f80" : "#303030" , fontSize:'20px', borderBottom: isActive ?'4px solid #070F80':'none'}}>{children}</li>
    </Link>
  );
};
export default NavLink;
