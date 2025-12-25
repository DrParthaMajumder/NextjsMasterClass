import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ background: "#eee", padding: "10px", marginTop: "20px" }}>
      <p>© {new Date().getFullYear()} My Next.js App</p>
    </footer>
  );
};

export default Footer;
