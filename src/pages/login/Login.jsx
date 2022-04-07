import "./login.css";

export default function Login() {
  return (
  <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
           <h3 className="loginLogo">Board</h3> 
           <span className="loginDesc">
               connect your self with the world and get help
           </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input className="loginInput" type="email" placeholder="Email"/>
                <input className="loginInput" type="password" placeholder="Password"/>
                <button className="loginButton">Log In</button>
                <span className="loginForgot"> Forgot Password!</span>
                <button className="loginRegisterButton">Create a new account</button>
            </div>
        </div>
    </div>

  </div>);
}
