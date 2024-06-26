import React, { useState } from 'react';

const VideoNavbar = () => {

    const Navoptions = ['LATEST VIDEOS', 'MATCH HIGHLIGHTS', 'PLAYER-HIGHLIGHTS', 'EXTENDED HIGHLIGHTS'];
    
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

    return ( 
        <div id="video-navbar">
            {Navoptions.map((option, index) => {
                return <div 
                style={
                    {borderBottom: currentIndex===index ? '2px solid white' : 'none'}
                }
                onClick={() => {
                    handleClick(index)
                }}>{option}</div>
            })}
        </div>
     );
}
 
export default VideoNavbar;