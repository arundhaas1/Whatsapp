import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Messages from "./Messages";

function Page() {
  return (
    <div className="mainpage">
      <div className="page">
        <div className="page__left">
          <Link to="/chat">
            <KeyboardBackspaceIcon
              style={{ textDecoration: "none", color: "white" }}
            />
          </Link>
          <Avatar className="page__avatar" />
          <h3>Arun Dhas 💛</h3>
        </div>

        <div className="page__right">
          <PhoneIcon />
          <AttachFileIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="mess">
        <Messages />
      </div>
    </div>
  );
}

export default Page;
