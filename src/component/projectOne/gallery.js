import React from "react";
const gallery = (props) => {
  return (
    <div className="grid grid-cols-4 gap-5 mx-5 mt-5  ">
      {props.image.map((item) => {
        return (
          <div key={item.id} className="auto-rows-min ">
            {" "}
            <img src={item.urls.small} alt="no img" />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default gallery;
