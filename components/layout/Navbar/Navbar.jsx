import React from "react";
import Image from "next/image";
import Logo from "public/images/istopp.png";
import Link from "next/link";
import { useRouter } from "next/router";
import NavLink from "./NavLinks";

const Navbar = () => {
  useRouter();

  return (
    <nav style={styles.container}>
      <Link href="/">
        <div style={styles.logoContainer}>
          <Image src={Logo} alt="Logo" width={60} height={60} />
          <span style={styles.textLogo}>ISTOPP</span>
        </div>
      </Link>
      <ul style={styles.navList}>
        <NavLink href="/about-us">About Us</NavLink>

        <NavLink href="/">PUVs</NavLink>
        <NavLink href="/tricycle">Tricycle</NavLink>
        <NavLink href="/analytics">Analytics</NavLink>
        <NavLink href="/road-incidents">Road Incidents</NavLink>
        <NavLink href="/downloads">
          <span style={styles.underlined}>Downloads</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

const styles = {
  container: {
    height: "7rem",
    padding: "0 8.875rem",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
  },

  textLogo: {
    fontSize: "1.875rem",
    color: "#303030",
    fontWeight: "800",
  },

  navList: {
    listStyle: "none",
    display: "flex",
    gap: "2.25rem",
    fontSize: "1.563rem",
    fontWeight: "800",
  },

  underlined: {
    paddingBottom: "4px",
    borderBottom: "4px solid #070f80",
  },
};
