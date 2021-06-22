import React, { useState } from "react";
import "./Messages.css";
import Message from "./Message";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
// import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

function Messages() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const sendIt= (e) => {
    e.preventDefault();
    setMessage(input);
  };

  return (
    <div className="messages">
      <div>
        <Message message={message} />
      </div>

      <form className="messages__footer">
        <div className="input__left">
          <InsertEmoticonIcon
            className="emoji"
            fontSize="medium"
            style={{ fontSize: 30, color: "gray" }}
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <CameraAltIcon
            className="camera"
            fontSize="medium"
            style={{ fontSize: 30, color: "gray" }}
          />
        </div>
        <div className="input__right">
          <SendIcon
            type="submit"
            onClick={sendIt}
            fontSize="large"
            style={{
              type: "submit",
              background: "#075E54",
              borderRadius: "999px",
              padding: "4px 4px",
              paddingLeft: "5px",
              color: "white",
              marginBottom: "5px",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Messages;
