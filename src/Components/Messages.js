import React from "react";
import "./Messages.css";
import Message from "./Message";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MicIcon from "@material-ui/icons/Mic";

function Messages() {
  return (
    <div className="messages">
      <div>
        <Message />
      </div>

      <div className="messages__footer">
        <div className="input__left">
          <InsertEmoticonIcon
            fontSize="medium"
            style={{ fontSize: 30, color: "gray", paddingLeft: "5px" }}
          />
          <input type="text" />
          <CameraAltIcon
            fontSize="medium"
            style={{ fontSize: 30, color: "gray", paddingRight: "7px" }}
          />
        </div>
        <div className="input__right">
          <MicIcon
            fontSize="large"
            style={{
              background: "#075E54",
              borderRadius: "999px",
              padding: "4px",
              color: "white",
              marginBottom: "6px",
            }}
          />
        </div>
      </div>

    </div>
  );
}

export default Messages;
