import React, { useEffect, useState } from "react";
import "./Messages.css";
import firebase from "firebase";
import "./Message.css";
import { CardContent, Card, Typography } from "@material-ui/core";
import db from '../Firebase.js'
import Message from "./Message";
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
  e.preventDefault();
  db.collection("Whatsapp").add({
      message : input,
      // username : user.displayName,
      username:user.displayName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput("")

  }
// console.log('msg is', messages)


  return (
    <div className="messages">
      <div>
            {
                messages.map(text => {
                    console.log("text is",text)
                    return(

                      <div className="message">
                      {text ? (<Card className="text">
                        <CardContent>
                          {/* /// */}
                          <Typography  >
                          <p>{text.message.username}:{text.message.message}</p>

                          </Typography>
                        </CardContent>
                      </Card>) : null}
                
                    </div>
                    )
                })
            }
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
  )
}
export default Messages;