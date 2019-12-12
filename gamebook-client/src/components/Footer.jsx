import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer container-fluid"
      style={{
        textAlign: "center",
        borderTop: "2px solid white",
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0"
      }}
    >
      <p>© 2019 Copyright: Egehan Gur</p>
    </footer>
  );
}
