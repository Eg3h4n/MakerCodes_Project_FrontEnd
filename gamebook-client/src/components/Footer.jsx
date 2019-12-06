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
        position: "absolute",
        bottom: "0"
      }}
    >
      <p>© 2019 Copyright: Egehan Gur</p>
    </footer>
  );
}
