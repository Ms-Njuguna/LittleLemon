import Button from "../components/Button"
import Food from "../assets/restauranfood.jpg"

export default function Hero(){
    return (
        <div>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon is a charming neighbourhood<br></br> bistro that serves simple food and<br></br> classic cocktails in a lively but casual environment.<br></br> The restaurant features a locally-sourced<br></br> menu with daily specials.</p>
                <Button label={'Reserve A Table'}/>
            </div>
            <div>
                <img src={Food} alt="Restaurant food"/>
            </div>
        </div>
    )
}