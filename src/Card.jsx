import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img className="Cardimages" src={props.imgsrc} alt="images"></img>
          <div className="details">
            <p className="desc">netflix original series</p>
            <h3 className="title">{props.title}</h3>
            <a
              className="link"
              rel="noreferrer"
              target={"_blank"}
              href={props.watchlink}
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
