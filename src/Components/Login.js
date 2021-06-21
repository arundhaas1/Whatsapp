import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
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

      <div className="login__button">
          <button><p>AGREE AND CONTINUE</p></button>
      </div>

      <div className="login__credit">
          <p>from</p>
          <h4>ARUN DHAS</h4>
      </div>
    </div>
  );
}

export default Login;
