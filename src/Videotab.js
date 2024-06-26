

const Videotab = (props) => {

    const headlines = props.headlines;
    const imageArray = props.imageArray;

    return ( 
        <div id="container" >
    {headlines.map((headline,index) => {
            return <div
                style={
                    {
                        backgroundImage: `url(${imageArray[index]})`,
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center' 
                    }
                }> {headline} 
            </div>
            })
    }
    </div>
        
     )
}
 
export default Videotab;