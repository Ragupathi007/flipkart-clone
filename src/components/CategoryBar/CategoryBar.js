import React from "react";
import "./CategoryBar.css";
export const CategoryBar = ({ imgsrc, CategoryName }) => {
  return (
    <div className="CategoryBar">
      <div className="categoryBar-img">
        <img src={imgsrc} alt="CategoryImg" />
      </div>
      <p className="categoryBar-name">{CategoryName}</p>
    </div>
  );
};
