import React, {useState} from 'react'
import './Login.css'
import { auth } from '../../firebase';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();//because the type of the button is submit it refreshes the page when clicked ana we don't want that because we'll lose our states..... so we stop ir from refreshing with this functonality
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("logged in");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
    const register = (e) => {
        e.preventDefault();
       auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
           //console.log(auth)
           if (auth) {
             navigate("/");
           }
         })
         .catch((error) => console.log(error.message));
    }
  return (
    <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={signIn}
              className="login__signinButton"
            >
              Sign in
            </button>
            <p>
              By continuing, you agree to Amazon's Condition of Use Privacy
              Notice.
            </p>
          </form>
        </div>
        <div className="a-divider a-divider-break">
          <h5>New to Amazon?</h5>
        </div>
        <button onClick={register} className="login__register">
          Create your Amazon account
        </button>
      </div>
    
  )
}

export default Login