import "./register.css";


export default function Register() {
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
                <input className="loginInput" type="Text" placeholder="Username"/>
                <input className="loginInput" type="email" placeholder="Email"/>
                <input className="loginInput" type="password" placeholder="Password"/>
                <input className="loginInput" type="password" placeholder="Password again"/>
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>
    </div>

  </div>);
}
