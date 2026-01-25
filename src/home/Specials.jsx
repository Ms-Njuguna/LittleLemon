import Button from "../components/Button"
import Special from "../components/Special"
import GreekSalad from "../assets/greek salad.jpg"
import Bruchetta from "../assets/bruchetta.svg"
import LemonDessert from "../assets/lemon dessert.jpg"

export default function Specials(){
    return(
        <div>
            <div>
                <h1>This Week's Specials!</h1>
                <Button label={'Order Online'}/>
            </div>
            <div>
                <Special foodItem={GreekSalad} description={'Fresh Greek salad with crisp lettuce, juicy tomatoes, creamy feta, olives, and tangy dressing.'} title={'Greek Salad'} price={'$ 12.99'}/>
                <Special foodItem={Bruchetta} description={'Bruschetta: Italian appetizer featuring toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.'} title={'Bruchetta'} price={'$ 8.99'}/>
                <Special foodItem={LemonDessert} description={'A zesty lemon dessert bursting with citrus flavor, balanced sweetness, and a refreshing, tangy finish.'} title={'Lemon Dessert'} price={'$ 5.00'}/>
            </div>
        </div>
    )
}