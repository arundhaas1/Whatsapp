import React from "react";
import "./Chat.css";
import Header from "./Header";
import Details from "./Details";
import Talks from "./Talks";
import { Link } from "react-router-dom";

function Chat() {
  return (
    <div className="chat">
      <div className="green">
        <Header />
        <Details />
      </div>
      <Link style={{textDecoration:'none'}} to="/page">
        <Talks />
      </Link>
    </div>
  );
}

export default Chat;
