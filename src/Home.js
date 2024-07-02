import Footer from "./Footer";
import Highlights from "./Highlights";
import Navbar from "./Navbar";
import StandingsDiv from "./StandingsDiv";
import Video from "./Video";
import LoggedIn from "./LoggedIn";
import data from './data.json';
import { useEffect } from 'react';
import { useState } from 'react';


const Home = ({brightLow, setBrightLow, isLoggedIn, setIsLoggedIn}) => {

    const [titles, setTitles] = useState([]);
    const [eventImages, setEventImages] = useState([]);
    const [eventNames, setEventNames] = useState([]);
    const [dates, setDates] = useState([]);

 useEffect(() => {

      const extractedTitles = Object.keys(data).map(key => data[key].title);
      setTitles(extractedTitles);
      const extractedEventNames = Object.keys(data).map(key => data[key].eventName);
      setEventNames(extractedEventNames);
      const extractedEventImages = Object.keys(data).map(key => data[key].eventImage);
      setEventImages(extractedEventImages);
      const extractedDates = Object.keys(data).map(key => data[key].date);
      setDates(extractedDates);
      
 },[]);

    const eventNames2 = eventNames.map((eventName, index) => ({eventName, index}));
    const dates2 = dates.map((date, index) => ({ date, index}));

    return ( 
    <div className = "Home">
    { !isLoggedIn && <Navbar brightLow={brightLow} setBrightLow={setBrightLow} />}
    { isLoggedIn && <LoggedIn brightLow={brightLow} setBrightLow={setBrightLow} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
    <StandingsDiv brightLow={brightLow} setBrightLow={setBrightLow} />
    <Highlights titles={titles} eventImages={eventImages} eventNames={ eventNames2 } dates={dates2} brightLow={brightLow} setBrightLow={setBrightLow} />
    <Video brightLow={brightLow} setBrightLow={setBrightLow} />
    <Footer brightLow={brightLow} setBrightLow={setBrightLow} />
    </div>
     );
}
 
export default Home;

 // const [titles, setTitles] = useState([]);
    // const [eventImages, setEventImages] = useState([]);
    // const [eventNames, setEventNames] = useState([]);
    // const [dates, setDates] = useState([]);

    //   const extractedTitles = Object.keys(data).map(key => data[key].title);

        //   setTitles(extractedTitles);
        //   console.log(extractedTitles);
        //   const extractedEventNames = Object.keys(data).map(key => data[key].eventName);
        //   setEventNames(extractedEventNames);
        //   console.log(extractedEventNames);
        //   const extractedEventImages = Object.keys(data).map(key => data[key].eventImage);
        //   setEventImages(extractedEventImages);
        //   console.log(extractedEventImages);
        //   const extractedDates = Object.keys(data).map(key => data[key].date);
        //   setDates(extractedDates);
        //   console.log(extractedDates);

     // useEffect(() => {
    //     fetch("public/data.json")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     }) 
    //     .catch(error => {
    //         console.log(error)});
    //   },[]);
