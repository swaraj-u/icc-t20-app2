import { useState } from 'react';
import './standingsDiv.css';
const StandingsDiv = ({ brightLow, setBrightLow }) => {

    const array = ["SECOND ROUND-GROUP1", "SECOND ROUND-GROUP2", "GROUP A", "GROUP B", "GROUP C", "GROUP D"];
    const [isClicked, setIsClicked] = useState(null);

    return ( <div id="standingsDiv" style={{
      filter:( brightLow) ? "brightness(50%)" : "brightness(100%)",
     }}>
        <div id="standings">
        <div id="topbar">
          <div id="heading"><h3>Standings</h3></div>
          <div id="scrollbar">
            <ul>
                {array.map((option, index) => {
                    return(
                        <li className="division" onClick={() => {
                            setIsClicked(index);
                        }} style={
                            {
                                borderBottom: isClicked===index ? '3px solid #ff0088' : 'none'
                            }
                        }>{option}</li> 
                    )
                })}
            </ul>
          </div>
        </div>
        <section id="table">
          <div className="heading">POS</div>
          <div className="heading">TEAM</div>
          <div className="heading">PLD</div>
          <div className="heading">NRR</div>
          <div className="heading">PTS</div>
          <div >1</div>
          <div className="logo">
            <img src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1188.png?v=7" data-src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1188.png?v=7" alt="AFG" className="si-team-logo lazy"/>
            AFG
          </div>
          <div >0</div>
          <div >-</div>
          <div >0</div>
          <div >2</div>
          <div className="logo">
            <img src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1.png?v=7" data-src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1.png?v=7" alt="AUS" className="si-team-logo lazy"/>
            AUS
          </div>
          <div >0</div>
          <div >-</div>
          <div >0</div>
          <div >3</div>
          <div className="logo">
            <img src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/2.png?v=7" data-src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/2.png?v=7" alt="BAN" className="si-team-logo lazy"/>
            BAN
          </div>
          <div >0</div>
          <div >-</div>
          <div >0</div>
          <div >4</div>
          <div className="logo">
            <img src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/4.png?v=7" data-src="https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/4.png?v=7" alt="IND" className="si-team-logo lazy"/>
            IND
          </div>
          <div >0</div>
          <div >-</div>
          <div >0</div>
        </section>
      </div>
    </div> );
}
 
export default StandingsDiv;