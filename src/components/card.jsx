import React from "react";
import Avatar from "./Avatar";
import Detail from "./detail";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar image={props.img} />
        </div>
        <div className="bottom">
          <Detail info={props.tele} />
          <Detail info={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
