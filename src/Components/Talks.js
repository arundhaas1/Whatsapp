import React from "react";
import { Avatar } from "@material-ui/core";
import "./Talks.css";

function Talks() {
  return (
    <div className="talks">
      <div className="talks__avatar">
        <Avatar className="avs" >D</Avatar>
      </div>
      <div className="talks__num">
        <p>Arun Dhas</p>
        <span>Hi Man</span>
      </div>
      <div className="talks__time">
        <p className="time">19.14</p>
      </div>
      <div className="line"/>
    </div>
  );
}

export default Talks;
