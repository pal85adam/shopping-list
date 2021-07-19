import React from "react";

const Footer = ({ footerContent = "© EIKA 2021" }) => {
  return (
    <footer>
      <div>{footerContent}</div>
    </footer>
  );
};

export default Footer;
