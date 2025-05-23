import React from "react";
import "../css/btn.css";

const Btn = ({ children }) => {
  return (
    <>
      <div className="page-btn">
        <button>{children}</button>
      </div>
    </>
  );
};

export default Btn;
