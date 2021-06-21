import React from "react";
import "./Details.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

function Details() {
  return (
    <div className="details">
      <div className="details__camera">
        <CameraAltIcon />
      </div>
      <div className="details__names">
        <h3 className="details__underline">CHATS</h3>
        <h3>STATUS</h3>
        <h3>CALLS</h3>
      </div>
      <div  className="empty"/>
    </div>
  );
}

export default Details;
