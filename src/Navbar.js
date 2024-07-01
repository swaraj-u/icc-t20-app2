import './navbar.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ brightLow, setBrightLow}) => {

 

  const [isClicked, setIsClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isHovered, setIsHovered] = useState(false); 
  // const [isHovered2, setIsHovered2] = useState(false);

  

  

  const HandleClick = () => {
    setIsClicked(true);
    setBrightLow(true);
    setIsScrolled(true);
  }

  const HandleClick2 = () => {
    setIsClicked(false);
    setBrightLow(false);
    setIsScrolled(false);
  }

  // const HandleHovering = () => {
  //   setIsHovered(true);
  // }

  // const LeaveHovering = () => {
  //   setIsHovered(false);
  // }

  // const HandleHovering2 = () => {
  //   setIsHovered2(true);
  // }

  // const LeaveHovering2 = () => {
  //   setIsHovered2(false);
  // }
  
  useEffect(() => {
  const navbar = document.querySelector("#navbar");
  const threeLines = document.querySelector("#three-lines");
  const sidebar = document.querySelector("#sidebar");
  

    document.body.addEventListener("click", (event)=>{
      if(!sidebar.contains(event.target) && !threeLines.contains(event.target))
      {
          setIsClicked(false);
          setBrightLow(false);
          setIsScrolled(false);
      }
  });

  

    window.addEventListener("scroll", () => {
      const scrollPosition = document.documentElement.scrollTop;
      // console.log(scrollPosition);
      if(scrollPosition>0)
          {
              navbar.style.borderTopRightRadius = "0px";
              navbar.style.borderTopLeftRadius = "0px";
          }
      else if(scrollPosition===0)
          {
              navbar.style.borderTopRightRadius = "15px";
              navbar.style.borderTopLeftRadius = "15px";
          }
  })

  if(isScrolled === true)
    document.body.style.overflow = "hidden";
  else if(isScrolled === false)
  {
    document.body.style.overflow = "auto";
  }
});           

    return ( 
    <nav id="navbar">
       <aside id="sidebar" style={{
        display: isClicked ? "block" : "none"
       }}> 
      <nav id="snavbar">
        <img id="Layer_1" src="https://img.icons8.com/?size=100&id=71200&format=png&color=000000" alt="" onClick={HandleClick2} />
        <div><img alt="t20-logo-horizontal-light" loading="lazy" decoding="async" data-nimg="1" className="iccimage" style={{color:"transparent"}} src="https://images.icc-cricket.com/image/private/t_q-best/v1706276260/prd/assets/tournaments/t20worldcup/2024/t20-logo-horizontal-light.svg"/></div>
      </nav>
      <div id="sidemain">
        <div>HOME</div>
        <div>MATCHES</div>
        <div>STANDINGS</div>
        <div>NEWS</div>
        <div>VIDEOS</div>
        <div>TEAMS</div>
        <div>STATS</div>
        <div>FANTASY</div>
        <div>FAN PASSPORT</div>
        <div>PREDICTOR</div>
        <div>BUY TICKETS</div>
        <div>POLLS</div>
        <div>PLAYER OF THE MATCH</div>
        <div>ABOUT</div>
        <div>ICC HOME</div>
      </div>
      <footer id="sfooter">
        <div id="social-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 34 34" fill="white" className="social-icon" aria-hidden="true"><circle cx="17" cy="17.0011" r="16.3" stroke="currentColor" stroke-width="1.4"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5335 20.463C15.5335 19.3746 15.5269 18.2862 15.5401 17.1979C15.5401 17.0134 15.4875 16.9581 15.2901 16.9642C14.9282 16.9765 14.5663 16.9642 14.1979 16.9704C14.0531 16.9765 13.9939 16.9335 14.0005 16.792C14.0071 16.1156 14.0071 15.4331 14.0005 14.7567C14.0005 14.6276 14.04 14.5845 14.1847 14.5845C14.5532 14.5907 14.9282 14.5722 15.2967 14.5907C15.5138 14.603 15.5533 14.5292 15.5533 14.3447C15.5401 13.8282 15.5401 13.3117 15.5533 12.7952C15.5664 12.1618 15.7506 11.5715 16.152 11.0611C16.652 10.4032 17.3758 10.108 18.2114 10.0712C19.0667 10.0343 19.9286 10.0527 20.7905 10.0466C20.909 10.0466 20.9485 10.0834 20.9485 10.1941C20.9419 10.8828 20.9419 11.5654 20.9485 12.2541C20.9485 12.377 20.909 12.4139 20.7774 12.4139C20.3629 12.4078 19.9484 12.4139 19.5404 12.4139C18.9878 12.4139 18.6588 12.6783 18.6259 13.1887C18.5996 13.5945 18.6193 14.0065 18.6062 14.4185C18.5996 14.5661 18.6983 14.5538 18.797 14.5538C19.422 14.5538 20.0536 14.5599 20.6787 14.5476C20.8629 14.5476 20.9221 14.5845 20.9024 14.7629C20.8234 15.4454 20.7577 16.1279 20.6919 16.8166C20.6787 16.9704 20.5997 17.0011 20.455 17.0011C19.9615 16.995 19.4615 16.995 18.968 17.0011C18.6127 17.0011 18.6456 16.9519 18.6456 17.2901C18.6456 19.4238 18.639 21.5514 18.6522 23.6851C18.6522 23.9126 18.593 23.9679 18.3561 23.9618C17.5074 23.9495 16.652 23.9495 15.8033 23.9618C15.5664 23.9679 15.5269 23.888 15.5269 23.6912C15.5335 22.609 15.5335 21.5329 15.5335 20.463Z" fill="currentColor"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 34 34" fill="white" className="social-icon" aria-hidden="true"><circle cx="17" cy="17.0011" r="16.3" stroke="currentColor" stroke-width="1.4"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M22.1525 12.7511C22.72 12.9068 23.1669 13.3656 23.3185 13.9483C23.5941 15.0042 23.5941 17.2075 23.5941 17.2075C23.5941 17.2075 23.5941 19.4107 23.3185 20.4668C23.1669 21.0494 22.72 21.5082 22.1525 21.664C21.1242 21.9469 17.0002 21.9469 17.0002 21.9469C17.0002 21.9469 12.8762 21.9469 11.8478 21.664C11.2803 21.5082 10.8334 21.0494 10.6818 20.4668C10.4062 19.4107 10.4062 17.2075 10.4062 17.2075C10.4062 17.2075 10.4062 15.0042 10.6818 13.9483C10.8334 13.3656 11.2803 12.9068 11.8478 12.7511C12.8762 12.4681 17.0002 12.4681 17.0002 12.4681C17.0002 12.4681 21.1242 12.4681 22.1525 12.7511ZM15.7638 15.3525V19.4737L19.0608 17.4132L15.7638 15.3525Z" fill="currentColor"></path></svg>
          <svg viewBox="0 0 34 34" width="33px" height="33px" fill="white" xmlns="http://www.w3.org/2000/svg" className="social-icon" aria-hidden="true"><circle cx="17" cy="17.0011" r="16.3" stroke="currentColor" stroke-width="1.4"></circle><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.0019 9.78885C15.0431 9.78885 14.7973 9.79741 14.028 9.83242C13.2602 9.86758 12.7361 9.98914 12.2776 10.1675C11.8032 10.3517 11.4008 10.5981 11 10.9991C10.5988 11.4 10.3524 11.8024 10.1676 12.2766C9.98875 12.7353 9.86704 13.2595 9.83249 14.027C9.79808 14.7963 9.78906 15.0423 9.78906 17.001C9.78906 18.9597 9.79778 19.2047 9.83264 19.974C9.86795 20.7418 9.9895 21.2659 10.1677 21.7245C10.3521 22.1988 10.5985 22.6012 10.9995 23.0021C11.4002 23.4032 11.8026 23.6502 12.2767 23.8345C12.7355 24.0128 13.2598 24.1344 14.0274 24.1695C14.7967 24.2045 15.0424 24.2131 17.001 24.2131C18.9598 24.2131 19.2049 24.2045 19.9742 24.1695C20.742 24.1344 21.2667 24.0128 21.7255 23.8345C22.1998 23.6502 22.6015 23.4032 23.0023 23.0021C23.4034 22.6012 23.6499 22.1988 23.8347 21.7246C24.012 21.2659 24.1337 20.7417 24.1697 19.9742C24.2043 19.2049 24.2133 18.9597 24.2133 17.001C24.2133 15.0423 24.2043 14.7965 24.1697 14.0272C24.1337 13.2594 24.012 12.7353 23.8347 12.2767C23.6499 11.8024 23.4034 11.4 23.0023 10.9991C22.6011 10.598 22.1999 10.3515 21.7251 10.1675C21.2653 9.98914 20.7409 9.86758 19.9731 9.83242C19.2038 9.79741 18.9589 9.78885 16.9996 9.78885H17.0019ZM20.8517 12.2858C20.3739 12.2858 19.9862 12.673 19.9862 13.151C19.9862 13.6288 20.3739 14.0164 20.8517 14.0164C21.3295 14.0164 21.7171 13.6288 21.7171 13.151C21.7171 12.6732 21.3295 12.2855 20.8517 12.2855V12.2858ZM17.0019 13.2978C14.9565 13.2978 13.2981 14.9561 13.2981 17.0015C13.2981 19.0469 14.9565 20.7045 17.0019 20.7045C19.0473 20.7045 20.705 19.0469 20.705 17.0015C20.705 14.9561 19.0471 13.2978 17.0017 13.2978H17.0019ZM17.0019 14.5973C18.3295 14.5973 19.4059 15.6736 19.4059 17.0014C19.4059 18.329 18.3295 19.4054 17.0019 19.4054C15.6741 19.4054 14.5978 18.329 14.5978 17.0014C14.5978 15.6736 15.6741 14.5973 17.0019 14.5973Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 32 32" fill="white" className="social-icon" aria-hidden="true"><circle cx="16" cy="16" r="15.3" stroke="currentColor" stroke-width="1.4"></circle><path d="M20.0258 10H22.1726L17.4825 15.0831L23 22H18.6799L15.2962 17.8049L11.4245 22H9.27646L14.2929 16.5631L9 10H13.4298L16.4883 13.8345L20.0258 10ZM19.2724 20.7815H20.4619L12.7834 11.1545H11.5069L19.2724 20.7815Z" fill="currentColor"></path></svg>
        </div>
        <div id="dropdown">
          <select id="language">
            <option value="english">ENGLISH</option>
            <option value="hindi">HINDI</option>
          </select>
        </div>
      </footer>
     </aside>
        <div id="container1" style={{
         filter:( brightLow) ? "brightness(50%)" : "brightness(100%)",
       }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="white" id="three-lines" onClick={HandleClick}><path fill-rule="evenodd" clip-rule="evenodd" d="M6 22.3285C6 21.8156 6.41574 21.3999 6.92857 21.3999H25.0714C25.5843 21.3999 26 21.8156 26 22.3285C26 22.8413 25.5843 23.257 25.0714 23.257H6.92857C6.41574 23.257 6 22.8413 6 22.3285Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6288C6 15.1159 6.41574 14.7002 6.92857 14.7002H25.0714C25.5843 14.7002 26 15.1159 26 15.6288C26 16.1416 25.5843 16.5573 25.0714 16.5573H6.92857C6.41574 16.5573 6 16.1416 6 15.6288Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.92857C6 8.41574 6.41574 8 6.92857 8H25.0714C25.5843 8 26 8.41574 26 8.92857C26 9.44141 25.5843 9.85714 25.0714 9.85714H6.92857C6.41574 9.85714 6 9.44141 6 8.92857Z"></path></svg>
           <img alt="t20-logo-horizontal-light" loading="lazy" width="172" height="36" decoding="async" data-nimg="1" className="max-sm:w-full h-full" style={{color:"transparent"}} src="https://images.icc-cricket.com/image/private/t_q-best/v1706276260/prd/assets/tournaments/t20worldcup/2024/t20-logo-horizontal-light.svg"/>
           <div className="menu" id="m1">ICC HOME</div>
           <div className="menu" id="m2">MATCHES</div>
           <div className="menu" id="m3">STANDINGS</div>
           <div className="menu" id="m4">NEWS</div>
           <div className="menu" id="m5">VIDEOS</div>
           <div className="menu" id="m6">FAN PASSPORT</div>
           <div className="menu" id="m7">FANTASY</div>
           <div className="menu" id="m8">PREDICTOR</div>
           <div className="menu" id="ticket">TICKETING
           <div className="rhombus"></div>
           <div className="box">
             <div>Buy Tickets</div>
             <div>Buy Hospitality</div>
             <div>About Hospitality</div>
             <div>T&Cs</div>
             <div>Faqs</div>
             <div>Refund Policy</div>
           </div>
       </div>
       <div className="menu" id="more">MORE
         <div className="rhombus"></div>
         <div className="box">
           <div>Teams</div>
           <div>Player Of The Match</div>
           <div>Shop</div>
           <div>Official Broadcasters</div>
           <div>Venue Guides</div>
           <div>Greatest Moments</div>
           <div>Trophy Tour</div>
           <div>Fan Parks</div>
           <div>Travel</div>
           <div>Playing Conditions</div>
         </div>
       </div>
      </div>
      <div id="container2">
       <div id="search" style={{
        filter:( brightLow ) ? "brightness(50%)" : "brightness(100%)",
       }}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white" className="mr-1 inline" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6375 15.2932C18.965 12.304 18.7547 7.97949 16.0069 5.23163C13.0314 2.25612 8.20713 2.25612 5.23163 5.23163C2.25612 8.20713 2.25612 13.0314 5.23163 16.0069C7.97949 18.7547 12.304 18.965 15.2932 16.6375C15.3061 16.6521 15.3195 16.6664 15.3334 16.6803L19.3741 20.721C19.7461 21.093 20.3491 21.093 20.721 20.721C21.093 20.3491 21.093 19.7461 20.721 19.3741L16.6803 15.3334C16.6664 15.3195 16.6521 15.3061 16.6375 15.2932ZM14.66 6.57853C16.8916 8.81016 16.8916 12.4283 14.66 14.66C12.4283 16.8916 8.81016 16.8916 6.57853 14.66C4.34691 12.4283 4.34691 8.81016 6.57853 6.57853C8.81016 4.34691 12.4283 4.34691 14.66 6.57853Z" fill="white"></path></svg>SEARCH</div>
       <Link to="/login"><div id="login"  style={{
        filter:( brightLow ) ? "brightness(50%)" : "brightness(100%)",
       }}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white" className="inline" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6141 7.53122C15.6141 5.59314 14.054 4.01637 12.1367 4.01637C10.219 4.01637 8.65884 5.59314 8.65884 7.53122C8.65884 9.46892 10.219 11.0457 12.1367 11.0457C14.054 11.0457 15.6141 9.46892 15.6141 7.53122ZM17.3623 7.53126C17.3623 10.4434 15.0178 12.8125 12.1367 12.8125C9.25517 12.8125 6.91103 10.4431 6.91103 7.53126C6.91103 4.61909 9.25517 2.25 12.1367 2.25C15.0182 2.25 17.3623 4.61909 17.3623 7.53126ZM6.34741 19.5048V21.75H4.5V19.5048C4.5 18.2411 4.9199 17.0429 5.71462 16.0396C6.81004 14.6568 8.45083 13.8637 10.2163 13.8637H13.7837C14.8948 13.8637 15.9753 14.1829 16.9085 14.7868C18.5312 15.8369 19.5 17.6008 19.5 19.5048V21.75H17.6518V19.5048C17.6518 17.4 15.9161 15.6876 13.7833 15.6876H10.2159C8.08269 15.6876 6.34741 17.4 6.34741 19.5048Z" fill="white"></path></svg>LOGIN</div></Link>

      </div>
    </nav> );
}
 
export default Navbar;