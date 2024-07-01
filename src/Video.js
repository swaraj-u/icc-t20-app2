import VideoNavbar from "./VideoNavbar";
import Videotab from "./Videotab";
import './video.css';

const Video = ({ brightLow, setBrightLow }) => {

    const imageArray = [
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/z2ipyef1xg15fuk7cxel",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/e9e1be0r3hlvf8o73hqu",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/v1719299673/prd/snkmeruhgsookfhb3qqd",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/ciosgh33mgs4jvc4lyjl",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/lvqz1bbiczbuzb0teelc",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/o4eymtjwghnk1xsjmkbg",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/whavpamhzxgghyxl7ltt",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/v1719280754/prd/narfy46tygxq4z2j2qwj",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/kioevu98pidtuybq4gjy",
        "https://images.icc-cricket.com/image/upload/t_ratio3_4-size20/prd/frkyjaprqizsllijigf4"
    ];

    const headlines = [
        "Rashid, Naveen spells overcome Bangladesh fight to secure semi-final spot for Afghanistan | Extended Highlights | T20WC 2024",
        "Gamechanger Naveen inspires Afghanistan to history | POTM Highlights | T20WC 2024",
        "Spirited Afghanistan enter T20 World Cup semi-finals | Match Highlights | T20WC 2024",
        "Naveen gets past final two wickets to give Afghanistan historic win | T20WC 2024",
        "Rashid strikes keep Afghanistan in the contest | T20WC 2024",
        "Naveen double rocks Bangladesh's pursuit | T20WC 2024",
        "Rishad three-for keeps Afghanistan in check | Innings Highlights | T20WC 2024",
        "Sarkar stunner sends back Naib | T20WC 2024",
        "Afghanistan batters survive horrible mix-up | T20WC 2024",
        "Rishad Hossain gets Zadran caught in the deep | T20WC 2024"
    ];

    return (
        <div id="videoSection" style={{
            filter:( brightLow) ? "brightness(50%)" : "brightness(100%)",
           }}>
            <h1>VIDEOS</h1>
            <VideoNavbar/>
            <Videotab headlines={headlines} imageArray={imageArray}/>
        </div>
      );
}
 
export default Video;