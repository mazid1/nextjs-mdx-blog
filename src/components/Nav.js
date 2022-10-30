import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav p-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer">Mazedul Islam</h2>
      </Link>
      <Link href="/bio" passHref className="my-auto">
        <h2 className="ms-5 pointer lead my-auto">Bio</h2>
      </Link>
    </nav>
  );
};

export default Nav;
