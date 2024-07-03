import { useState } from 'react';
import './highlight.css';

const Highlights = ({titles, eventImages, eventNames, dates,  brightLow, setBrightLow}) => {

  const tabContainer2 = document.querySelector("#highcontainer");
  const nextScroll = document.querySelector("#next-scroll");
  const previousScroll = document.querySelector("#previous-scroll");
  
                                                                             
  const [counter2, setCounter2] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [textSearch, setTextSearch] = useState(false);
  const [defaultDeploy, setDefaultDeploy] = useState(true);
  const [dateSearch, setDateSearch] = useState(false);
 
  const [eventNameChanging, setEventNameChanging] = useState(eventNames.map(eventName => eventName));
  const [dateChanging, setDateChanging] = useState(dates.map(date => date));
  
  const startDragging2 = () => {
      setCounter2(true);
  }

  const Dragging2 = (event) => {
    const maxScrollLeft = tabContainer2.scrollWidth - tabContainer2.clientWidth - 10;
    tabContainer2.scrollLeft -= event.movementX;
    console.log(tabContainer2.scrollLeft);
    console.log(maxScrollLeft);

    if(tabContainer2.scrollLeft>0 && tabContainer2.scrollLeft < (maxScrollLeft) )
      {
          previousScroll.classList.add("swiper-button-previous");
          nextScroll.classList.add("swiper-button-next");
      }
  
      else if(tabContainer2.scrollLeft > (maxScrollLeft))
      {
          nextScroll.classList.remove("swiper-button-next");
      }

      else if(tabContainer2.scrollLeft === 0)
      {
          previousScroll.classList.remove("swiper-button-previous");
      }

}
 
  const stopDragging2 = () => {
    setCounter2(false);
  }

const Nothing2 = () => {};

const HandleInputChange = (event) => {
  setUserInput(event.target.value);
}

const HandleInputChange2 = (event) => {
  setUserInput2(event.target.value);
}


const SearchHandler = (event) => {
  event.preventDefault();
  const phrase = userInput.toLowerCase();
  const updatedEventNames= eventNames.filter(item => item.eventName.toLowerCase().includes(phrase));
  setEventNameChanging(updatedEventNames.map(eventName => eventName));
  setDefaultDeploy(false);
  setDateSearch(false);
  setTextSearch(true);
}

const SearchHandler2 = (event) => {
  event.preventDefault();
  const phrase2 = userInput2;
  const updatedDates= dates.filter(item => item.date.includes(phrase2));
  setDateChanging(updatedDates.map(date => date));
  setDefaultDeploy(false);
  setDateSearch(true);
  setTextSearch(false);
}

const clearFunction = () => {
  setDateSearch(false);
  setTextSearch(false);
  setDefaultDeploy(true);
  setUserInput('');
  setUserInput2('');
}



    return ( 
      <main style={{
        filter:( brightLow) ? "brightness(50%)" : "brightness(100%)",
       }}>
        <h2>MATCH HIGHLIGHTS</h2>
        { textSearch && <div className="clearOption" onClick={clearFunction} style={{color:"white"}}>CLEAR</div>}
        { dateSearch && <div className="clearOption" onClick={clearFunction}  style={{color:"white"}}>CLEAR</div>}
        <div id="searchDiv"> 
            <form id="searchTab" onSubmit={SearchHandler}>
              <input type="text" placeholder="What are you looking for?" onChange={HandleInputChange} value={userInput}/>
              <button className="searchOption">Search</button>
            </form>
            <form id="dataSearch" onSubmit={SearchHandler2}>
              <label>Search By Date:</label>
              <input type="text" placeholder="DD/MM/YY" onChange={HandleInputChange2} value={userInput2}/>
              <button className="searchOption">Search</button>
            </form>
        </div>
      <div id="highlightsWrapper">
      <div id="highcontainer"
             onMouseDown={startDragging2} 
             onMouseMove={counter2 ? Dragging2 : Nothing2} 
             onMouseUp={stopDragging2}
      >
      <div id="previous-scroll"></div>
       {textSearch &&
       eventNameChanging.map((eventName) => {
        return (
          <div className="match">
            <img src={eventImages[eventName.index]} alt=""/>
            <div className="ICC">{eventName.eventName}</div>
            <div className="stext">{titles[eventName.index]}</div>
            <div className="day">{dates[eventName.index].date}</div>
          </div>
        )
       })}

       {dateSearch &&
       dateChanging.map((date) => {
        return (
          <div className="match">
            <img src={eventImages[date.index]} alt=""/>
            <div className="ICC">{eventNames[date.index].eventName}</div>
            <div className="stext">{titles[date.index]}</div>
            <div className="day">{date.date}</div>
          </div>
        )
       })}

       {defaultDeploy &&
       eventImages.map((eventImage, index) => {
        return (
          <div className="match">
            <img src={eventImage} alt=""/>
            <div className="ICC">{eventNames[index].eventName}</div>
            <div className="stext">{titles[index]}</div>
            <div className="day">{dates[index].date}</div>
          </div>
        )
       })}
      <div id="next-scroll" className="swiper-button-next"></div>
      </div>
      </div>
    </main> );
}
 
export default Highlights;


 
