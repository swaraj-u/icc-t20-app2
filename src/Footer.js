import './footer.css';
const Footer = ({ brightLow, setBrightLow }) => {
    return ( <footer id="footer" style={{
      filter:( brightLow) ? "brightness(50%)" : "brightness(100%)",
     }}> 
        <div id="premierPartners">
        <div className="companies">
          <img alt="emirates" loading="lazy" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[144px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1705588073/prd/assets/sponsors/5-T1-Emirates_dfab1b.png" style={{color:"transparent"}}/>
          <img alt="aramco" loading="lazy" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[144px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1705587944/prd/assets/sponsors/4-T1-aramco-01_rpnfln.png" style={{color:"transparent"}}/>
          <img alt="dp-world" loading="lazy" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[144px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1705588507/prd/assets/sponsors/DP_World_Light_Dark_obzfai.png" style={{color:"transparent"}}/>
        </div>
        <div className="text">PREMIER PARTNERS</div>
      </div>
      <div id="globalPartners">
        <div className="companies">
          <img alt="coca-cola" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[120px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1706102226/prd/assets/sponsors/cocacola_yzkrqa.png" style={{color:"transparent"}}/>
          <img alt="indusind-bank" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[120px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1705587839/prd/assets/sponsors/6-T1-IndusInd_kttrbz.png" style={{color:"transparent"}}/>
        </div>
        <div className="text">GLOBAL PARTNERS</div>
      </div>
      <div id="otherPartners">
       <div id="officialSupporter">
        <div className="companies">
          <img alt="royal-stag-x3658" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[96px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1717640442/prd/assets/sponsors/Royal_Stag_200mm_wkcdaf.png" style={{color:"transparent"}}/>
          <img alt="fancraze-x7175" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[96px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1706686000/prd/assets/sponsors/FanCraze_Logo_t0igll.png" style={{color:"transparent"}}/>
          <img alt="near-mobile" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[96px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1718351614/prd/assets/sponsors/near_dark.png" style={{color:"transparent"}}/>
        </div>
        <div className="text">OFFICIAL SUPPORTERS</div>
       </div>
       <div id="border"></div>
       <div id="socialResponsibility">
        <div className="companies">
          <img alt="cricket-4-good" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="mx-auto my-0 flex-none w-[96px]" src="https://images.icc-cricket.com/image/private/t_w_180/v1707311901/prd/assets/sponsors/cricket_4_sycngh.png" style={{color:"transparent"}}/>
        </div>
        <div className="text">SOCIAL RESPONSIBILITY</div>
       </div>
      </div>
      <div className="social">
        <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 34 34" fill="transparent" className="social-icon" aria-hidden="true"><circle cx="17" cy="17.0011" r="16.3" stroke="currentColor" stroke-width="1.4"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5335 20.463C15.5335 19.3746 15.5269 18.2862 15.5401 17.1979C15.5401 17.0134 15.4875 16.9581 15.2901 16.9642C14.9282 16.9765 14.5663 16.9642 14.1979 16.9704C14.0531 16.9765 13.9939 16.9335 14.0005 16.792C14.0071 16.1156 14.0071 15.4331 14.0005 14.7567C14.0005 14.6276 14.04 14.5845 14.1847 14.5845C14.5532 14.5907 14.9282 14.5722 15.2967 14.5907C15.5138 14.603 15.5533 14.5292 15.5533 14.3447C15.5401 13.8282 15.5401 13.3117 15.5533 12.7952C15.5664 12.1618 15.7506 11.5715 16.152 11.0611C16.652 10.4032 17.3758 10.108 18.2114 10.0712C19.0667 10.0343 19.9286 10.0527 20.7905 10.0466C20.909 10.0466 20.9485 10.0834 20.9485 10.1941C20.9419 10.8828 20.9419 11.5654 20.9485 12.2541C20.9485 12.377 20.909 12.4139 20.7774 12.4139C20.3629 12.4078 19.9484 12.4139 19.5404 12.4139C18.9878 12.4139 18.6588 12.6783 18.6259 13.1887C18.5996 13.5945 18.6193 14.0065 18.6062 14.4185C18.5996 14.5661 18.6983 14.5538 18.797 14.5538C19.422 14.5538 20.0536 14.5599 20.6787 14.5476C20.8629 14.5476 20.9221 14.5845 20.9024 14.7629C20.8234 15.4454 20.7577 16.1279 20.6919 16.8166C20.6787 16.9704 20.5997 17.0011 20.455 17.0011C19.9615 16.995 19.4615 16.995 18.968 17.0011C18.6127 17.0011 18.6456 16.9519 18.6456 17.2901C18.6456 19.4238 18.639 21.5514 18.6522 23.6851C18.6522 23.9126 18.593 23.9679 18.3561 23.9618C17.5074 23.9495 16.652 23.9495 15.8033 23.9618C15.5664 23.9679 15.5269 23.888 15.5269 23.6912C15.5335 22.609 15.5335 21.5329 15.5335 20.463Z" fill="currentColor"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 34 34" fill="transparent" className="social-icon" aria-hidden="true"><circle cx="17" cy="17.0011" r="16.3" stroke="currentColor" stroke-width="1.4"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M22.1525 12.7511C22.72 12.9068 23.1669 13.3656 23.3185 13.9483C23.5941 15.0042 23.5941 17.2075 23.5941 17.2075C23.5941 17.2075 23.5941 19.4107 23.3185 20.4668C23.1669 21.0494 22.72 21.5082 22.1525 21.664C21.1242 21.9469 17.0002 21.9469 17.0002 21.9469C17.0002 21.9469 12.8762 21.9469 11.8478 21.664C11.2803 21.5082 10.8334 21.0494 10.6818 20.4668C10.4062 19.4107 10.4062 17.2075 10.4062 17.2075C10.4062 17.2075 10.4062 15.0042 10.6818 13.9483C10.8334 13.3656 11.2803 12.9068 11.8478 12.7511C12.8762 12.4681 17.0002 12.4681 17.0002 12.4681C17.0002 12.4681 21.1242 12.4681 22.1525 12.7511ZM15.7638 15.3525V19.4737L19.0608 17.4132L15.7638 15.3525Z" fill="currentColor"></path></svg>
        <svg viewBox="0 0 34 34" width="33px" height="33px" fill="transparent" xmlns="http://www.w3.org/2000/svg" className="social-icon" aria-hidden="true"><circle cx="17" cy="17.0011" r="16.3" stroke="currentColor" stroke-width="1.4"></circle><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.0019 9.78885C15.0431 9.78885 14.7973 9.79741 14.028 9.83242C13.2602 9.86758 12.7361 9.98914 12.2776 10.1675C11.8032 10.3517 11.4008 10.5981 11 10.9991C10.5988 11.4 10.3524 11.8024 10.1676 12.2766C9.98875 12.7353 9.86704 13.2595 9.83249 14.027C9.79808 14.7963 9.78906 15.0423 9.78906 17.001C9.78906 18.9597 9.79778 19.2047 9.83264 19.974C9.86795 20.7418 9.9895 21.2659 10.1677 21.7245C10.3521 22.1988 10.5985 22.6012 10.9995 23.0021C11.4002 23.4032 11.8026 23.6502 12.2767 23.8345C12.7355 24.0128 13.2598 24.1344 14.0274 24.1695C14.7967 24.2045 15.0424 24.2131 17.001 24.2131C18.9598 24.2131 19.2049 24.2045 19.9742 24.1695C20.742 24.1344 21.2667 24.0128 21.7255 23.8345C22.1998 23.6502 22.6015 23.4032 23.0023 23.0021C23.4034 22.6012 23.6499 22.1988 23.8347 21.7246C24.012 21.2659 24.1337 20.7417 24.1697 19.9742C24.2043 19.2049 24.2133 18.9597 24.2133 17.001C24.2133 15.0423 24.2043 14.7965 24.1697 14.0272C24.1337 13.2594 24.012 12.7353 23.8347 12.2767C23.6499 11.8024 23.4034 11.4 23.0023 10.9991C22.6011 10.598 22.1999 10.3515 21.7251 10.1675C21.2653 9.98914 20.7409 9.86758 19.9731 9.83242C19.2038 9.79741 18.9589 9.78885 16.9996 9.78885H17.0019ZM20.8517 12.2858C20.3739 12.2858 19.9862 12.673 19.9862 13.151C19.9862 13.6288 20.3739 14.0164 20.8517 14.0164C21.3295 14.0164 21.7171 13.6288 21.7171 13.151C21.7171 12.6732 21.3295 12.2855 20.8517 12.2855V12.2858ZM17.0019 13.2978C14.9565 13.2978 13.2981 14.9561 13.2981 17.0015C13.2981 19.0469 14.9565 20.7045 17.0019 20.7045C19.0473 20.7045 20.705 19.0469 20.705 17.0015C20.705 14.9561 19.0471 13.2978 17.0017 13.2978H17.0019ZM17.0019 14.5973C18.3295 14.5973 19.4059 15.6736 19.4059 17.0014C19.4059 18.329 18.3295 19.4054 17.0019 19.4054C15.6741 19.4054 14.5978 18.329 14.5978 17.0014C14.5978 15.6736 15.6741 14.5973 17.0019 14.5973Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 32 32" fill="transparent" className="social-icon" aria-hidden="true"><circle cx="16" cy="16" r="15.3" stroke="currentColor" stroke-width="1.4"></circle><path d="M20.0258 10H22.1726L17.4825 15.0831L23 22H18.6799L15.2962 17.8049L11.4245 22H9.27646L14.2929 16.5631L9 10H13.4298L16.4883 13.8345L20.0258 10ZM19.2724 20.7815H20.4619L12.7834 11.1545H11.5069L19.2724 20.7815Z" fill="currentColor"></path></svg>
      </div>
      <div id="lasttext">
        <div className="ltext">TERMS OF SERVICE</div>
        <div className="ltext">PRIVACY POLICY</div>
        <div className="ltext">CAREERS</div>
        <div className="ltext">RELATED SITES</div>
        <div className="ltext">ABOUT</div>
      </div>
      <hr></hr>
      <div id="icclogo">
        <img alt="ICC logo footer" loading="lazy" width="90" height="34" decoding="async" data-nimg="1" className="max-sm:w-full h-full" style={{color:"transparent"}} src="https://images.icc-cricket.com/image/private/t_q-best/v1698133655/prd/assets/logos/icc-white-logo.svg"/>
      </div>
      <div id="copyright">Copyright 2024 ICC. All rights reserved.</div>
    </footer> );
}
 
export default Footer;