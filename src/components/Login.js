import React from "react";

function Login() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a className="submit" align="center">
          Sign in
        </a>
          <a className="forgot" href="#">Forgot Password? </a>
      </form>
    </div>
  );
}

export default Login;