import './playerInfo.css';
import { useEffect, useState } from 'react';

const PlayerInfo = ({ brightLow, setBrightLow }) => {

    const [playerName, setPlayerName] = useState('');
    const [logo, setLogo] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [role, setRole] = useState('');
    const [battingStyle, setBattingStyle] = useState('');
    const [bowlingStyle, setBowlingStyle] = useState('');
    const [country, setCountry] = useState(''); 
    const [playerImage, setPlayerImage] = useState('');

    useEffect(() => {
        fetch("https://api.cricapi.com/v1/players_info?apikey=3935eb40-7e87-4f26-88b9-46510be9cd12&offset=0&id=16592242-ef26-45d9-bf23-fc090e90fbbe")
        .then(response => response.json())
        .then(result => {
            const data = result.data;
            setPlayerName(data.name);
            setLogo(data.playerImg);
            const date = data.dateOfBirth;
            const date2 = new Date(date);
            const date3 = date2.toDateString();
            console.log(date3);
            setDateOfBirth(date3);
            setRole(data.role);
            setBattingStyle(data.battingStyle);
            setBowlingStyle(data.bowlingStyle);
            setCountry(data.country);
            setPlayerImage("https://static-files.cricket-australia.pulselive.com/headshots/440/3447-camedia.png");
        })
        .catch(err => console.log(err));
    },[]);

    
        return ( <div id="playerInfo" style={{
            filter:( brightLow) ? "brightness(50%)" : "brightness(100%)",
           }}>
            <nav>
               <p>{playerName}</p>
               <img alt="" src={logo}/>
            </nav>
            <section>
                <div id="info">
                    <label>ROLE:</label>
                    <span>{role}</span><br/>
                    <label>BATTING STYLE:</label>
                    <span>{battingStyle}</span><br/>
                    <label>BOWLING STYLE:</label>
                    <span>{bowlingStyle}</span><br/>
                    <label>DATE OF BIRTH:</label>
                    <span>{dateOfBirth}</span><br/>
                    <label>COUNTRY:</label>
                    <span>{country}</span>
                </div>
                <div id="imageInfo">
                    <img alt="" src={playerImage} />
                </div>
            </section>
           </div> );
    
}
 
export default PlayerInfo;