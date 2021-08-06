import React, { useEffect, useState } from "react";
import "./Messages.css";
import firebase from "firebase";
import "./Message.css";
import { CardContent, Card, Typography } from "@material-ui/core";
import db from '../Firebase.js'
import Message from "./Message";
import { IconButton } from '@material-ui/core';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
// import MicIcon from "@material-ui/icons/Mic";
import {useDataLayerValue} from '../datalayer'
import SendIcon from "@material-ui/icons/Send";
// import FlipMove from 'react-flip-move';

function Messages() {

  const[{user},dispatch]=useDataLayerValue()
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect (()=>{
    db.collection('Whatsapp').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>({id :doc.id ,message :doc.data()})))
    })
},[])

const sendIt=(e)=>{
  // e.preventDefault();
  db.collection("Whatsapp").add({
      message : input,
      username:user.displayName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput("")

  }
// console.log('name1 is',user.displayName)

const onEnter=(e)=>{
  if (e.keyCode===13) {
    sendIt();
  }
}

  return (
    <div className="messages">
      <div>
            {
                messages.map(text => {
                    console.log("text is",text)
                    const isUser= text.message.username===user?.displayName
                    return(
                      // console.log('name2 is' ,text.message.username ),
                      <div className="message">
                      {text ? (<Card className={!isUser ? "text" : "guest"} >
                        <CardContent>
                          <Typography>
                          <p className="text__mess1">{text.message?.username}</p>
                          <p className="text__mess2">{text.message.message}</p>

                          </Typography>
                        </CardContent>
                      </Card>) : null}
                
                    </div>
                    )
                })
            }
      </div>

      <div className="messages__footer">
        <div className="input__left">
          <InsertEmoticonIcon
            className="emoji"
            fontSize="medium"
            style={{ fontSize: 30, color: "gray" }}
          />
          <input
            type="text"
            onKeyDown={onEnter}
            placeholder="Type a message"
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
        <IconButton  disabled={!input}>
          <SendIcon
            onClick={sendIt}
            fontSize="large"
            style={{
              background: "#075E54",
              borderRadius: "999px",
              padding: "4px 4px",
              paddingLeft: "5px",
              color: "white",
              marginBottom: "5px",
            }}
          />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
export default Messages;