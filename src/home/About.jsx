import MA1 from "../assets/Mario and Adrian A.jpg"
import MA2 from "../assets/Mario and Adrian b.jpg"

export default function About(){
    return (
        <div>
            <div>
                <h1>A Little Back Story</h1>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian,<br></br> who moved to the United States to pursue their shared<br></br> dream of owning a restaurant. To craft the menu, Mario<br></br> relies on family recipes and his experience as a chef in Italy.<br></br> Adrian does all the marketing for the restaurant and led the<br></br> effort to expand the menu beyond classic Italian to<br></br> incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <div>
                <img src={MA1} alt="A picture of Adrian and Mario"/>
                <img src={MA2} alt="A picture of Adrian and Mario"/>
            </div>
        </div>
    )
}