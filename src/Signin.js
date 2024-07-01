import './signin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const navigate = useNavigate();

    const SubmitHandler = () => {
        navigate('/home');
        setTimeout(() => {
            alert("You created your account successfully!");
          },100)
        
    }

    return ( 
        <div id="wrapper">
    <div id="loginJumpbox" >
        <div id="cancelDiv"><img src="https://img.icons8.com/?size=20&id=39776&format=png&color=000000" alt=""/><Link to="/login" className="linkCancel">Cancel</Link></div>
        <img className="companyLogo" data-tenant-branding-logo="true" src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" alt="Company Logo"/>
        <form onSubmit={SubmitHandler}>
          <label>First Name</label>
          <input type="text" placeholder="First Name" required/>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" required/>
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" required/>
          <label>Password</label>
          <input type="password" placeholder="Password" required/>
          <div className="checkboxDiv"><input type="checkbox" className="checkbox" required /><span> I consent to ICC keeping me informed by email about products, services and content</span></div>
          <div className="checkboxDiv"><input type="checkbox" className="checkbox" required /><span> I have read and understood the <a href="https://www.icc-cricket.com/about/the-icc/legal-notices/privacy-policy">Privacy Policy</a> and agree to the <a href="https://www.icc-cricket.com/about/the-icc/legal-notices/website-terms-of-use">Terms and Conditions</a></span></div>
          <input className="submit" type="submit" value="Create Account" required/>
        </form>
       </div> 
       </div>
     );
}
 
export default Signin;