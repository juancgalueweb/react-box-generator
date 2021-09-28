import React from "react";

export const Boxes = ({ divProps }) => {
  // console.log(divProps);
  return (
    <div className="container">
      {divProps.length > 0 &&
        divProps.map((ele, index) => (
          <div
            key={index}
            className="boxes"
            style={{
              backgroundColor: ele.bgColor,
              width: ele.width !== "" ? `${ele.width}px` : `100px`,
              height: ele.height !== "" ? `${ele.height}px` : `100px`,
            }}
          ></div>
        ))}
    </div>
  );
};
