import React from "react";
import Chat from './Chat'
import "./Login.css";
import { Link } from "react-router-dom";
import { auth,provider } from "../Firebase";
import { useDataLayerValue } from "../datalayer";

function Login() {

    const[{user},dispatch]=useDataLayerValue()

  const agreeIt = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: "SET_USER",
          user: result.user,
        })
      )
      .catch((e) => alert(e.message));
  };

  console.log('user is',user)

  return (
    <div className="login">
     {!user ? (<Chat />):(    <div className="login">
      <div className="login__header">Welcome to Whatsapp</div>

      <div className="login__img">
        <img alt="" src="Assets/whatsappbanner.png" />
      </div>

      <div className="login__agree">
        <p>
          Read our <span>Privacy Policy.</span>Tap 'Agree and continue' to
          accept the <span>Terms and Service</span>
        </p>
      </div>

      <div style={{ textDecoration: "none" }} to="/chat">
        <div className="login__button">
          <button>
            <p onClick={agreeIt}>AGREE AND CONTINUE</p>
          </button>
        </div>
      </div>

      <div className="login__credit">
        <p>from</p>
        <h4>ARUN DHAS</h4>
      </div>
    </div>)}
    </div>
  );
}

export default Login;
