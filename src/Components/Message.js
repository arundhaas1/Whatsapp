import React from "react";
import "./Message.css";
import { CardContent, Card, Typography } from "@material-ui/core";

function Message({ message }) {
  return (
    <div className="message">
      {message ? (<Card className="text">
        <CardContent>
          <Typography color="initial" variant="h5" component="h2">
              {message}
          </Typography>
        </CardContent>
      </Card>) : null}
    </div>
  );
}

export default Message;
