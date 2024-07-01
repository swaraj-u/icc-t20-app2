import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = ({isLoggedIn, setIsLoggedIn}) => {


  const [isHovered, setIsHovered] = useState(false); 
  const [isHovered2, setIsHovered2] = useState(false);
  


   const HandleHovering = () => {
    setIsHovered(true);
  }

  const LeaveHovering = () => {
    setIsHovered(false);
  }

  const HandleHovering2 = () => {
    setIsHovered2(true);
  }

  const LeaveHovering2 = () => {
    setIsHovered2(false);
  }

  const navigate = useNavigate();

  const SubmitHandler = () => {
      setIsLoggedIn(true);
      navigate('/home');
      setTimeout(() => {
        alert("You logged in!");
      },100);
  }


  return (
    <div id="wrapper">
    <div id="loginJumpbox" >
        <img className="companyLogo" data-tenant-branding-logo="true" src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" alt="Company Logo"/>
        <div id="heading1">Log in or Create Your Account</div>
        <form onSubmit={SubmitHandler}>
          <input type="email" placeholder="Email Address" required/>
          <input type="password" placeholder="Password" required/>
          <input className="submit" type="submit" value="Log In" required/>
        </form>
        <div id="signin-text">Don't have an account? Sign up today for exclusive content, early access to tickets and other membership rewards <span><Link to="/signin">Sign Up</Link></span></div>
        <div id="heading2">Log In With Your Social Account</div>
        <div className="social-account" onMouseEnter = {HandleHovering} onMouseLeave = {LeaveHovering} 
        style={{backgroundColor: isHovered ? "#3b5598" : "white" ,
                color:isHovered ? "white" : "black"
        }}>
          { !isHovered && <img src="https://accounts.icc-cricket.com/static/tenant/templates/idp_logos/colored/facebook.svg" alt=""/> }
          { isHovered && <img src="https://accounts.icc-cricket.com/static/tenant/templates/idp_logos/white/facebook.svg" alt=""/> }
          <div className="companyName">Facebook</div></div>
          
        <div className="social-account" onMouseEnter = {HandleHovering2} onMouseLeave = {LeaveHovering2}
        style={{backgroundColor: isHovered2 ? "#c64a29" : "white" ,
                color:isHovered2 ? "white" : "black"}}
        >
          { !isHovered2 && <img src="https://accounts.icc-cricket.com/static/tenant/templates/idp_logos/colored/google.svg" alt=""/>}
          { isHovered2 && <img src="https://accounts.icc-cricket.com/static/tenant/templates/idp_logos/white/google.svg" alt=""/>}
          <div className="companyName">Google</div></div>
       </div> 
       </div>
  );
}

export default Login;