import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header style={{ background: "#eee", padding: "10px" }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
