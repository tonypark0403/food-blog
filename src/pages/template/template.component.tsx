import React from "react";
import "./template.style.scss";

const Template: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className="main_container">
        <aside id="left" />
        <div id="center">{children}</div>
        <aside id="right" />
      </div>
      <div className="footer" />
    </>
  );
};

export default Template;
