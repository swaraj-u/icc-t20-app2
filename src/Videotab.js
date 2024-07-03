import { useState } from "react";

const Videotab = (props) => {

    const tabContainer = document.querySelector("#container");
    const next = document.querySelector("#next");
    const previous = document.querySelector("#previous");
    const headlines = props.headlines;
    const imageArray = props.imageArray;

    const [counter, setCounter] = useState(false);

    const startDragging = () => {
        setCounter(true);
    }

    const Dragging = (event) => {

        const maxScrollLeft = tabContainer.scrollWidth - tabContainer.clientWidth - 10;
       
        tabContainer.scrollLeft -= event.movementX;
        console.log(tabContainer.scrollLeft);
        console.log(maxScrollLeft)

            if(tabContainer.scrollLeft>0 && tabContainer.scrollLeft < (maxScrollLeft) )
            {
                previous.classList.add("scroll-previous");
                next.classList.add("scroll-next");
            }
        
            else if(tabContainer.scrollLeft > (maxScrollLeft))
            {
                next.classList.remove("scroll-next");
            }
    
            else if(tabContainer.scrollLeft === 0)
            {
                previous.classList.remove("scroll-previous");
            }
    }

    const stopDragging = () => {
        setCounter(false);
    }

    const Nothing = () => {};

    return ( 
        <div id="videoWrapper">
        <div id="container" 
             onMouseDown={startDragging} 
             onMouseMove={counter ? Dragging : Nothing} 
             onMouseUp={stopDragging}
            >
                <span id="previous"></span>
    {headlines.map((headline,index) => {
            return <div
                style={
                    {
                        backgroundImage: `url(${imageArray[index]})`,
                        backgroundSize: 'cover', 
                        backgroundRepeat:  'no-repeat', 
                        backgroundPosition: 'center' 
                    }
                }> {headline} 
            </div>
            })
    }
    <span id="next" className="scroll-next"></span>
    </div>
    </div>  
     )
}
 
export default Videotab;