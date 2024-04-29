import React from "react";

const Rightbar = ({data, bgColor, color}) => {
  return (
    <>
      <div
        className="right_container"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
      >
        <div className="postImg">
          <img id="_img" src={data.img} alt="" />
          <div className="inside_img">
            <div className="img">
              <img src={data.authorImg} alt="" />
            </div>
            <div className="text">
              <h3 style={{color:'white'}}>{data.authorName}</h3>
              <p style={{color:'white'}}>{data.authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;