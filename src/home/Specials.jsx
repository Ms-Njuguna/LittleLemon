import Button from "../components/Button"
import Special from "../components/Special"
import GreekSalad from "../assets/greek salad.jpg"
import Bruchetta from "../assets/bruchetta.svg"
import LemonDessert from "../assets/lemon dessert.jpg"

export default function Specials({ "data-cy": dataCy }){
    return(
        <section data-cy={dataCy} className="py-16 md:pt-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-row justify-between items-start sm:items-center gap-4">
                    <h1 className="text-3xl font-bold">This Week's Specials!</h1>
                    <Button label={'Order Online'} className="bg-[#F4CE14] text-[#000000] border-[#F4FE14]"/>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <Special title="Greek Salad" price="$12.99" foodItem={GreekSalad} description="Fresh Greek salad with crisp lettuce, juicy tomatoes, creamy feta, olives, and tangy dressing." />
                    <Special title="Bruchetta" price="$8.99" foodItem={Bruchetta} description="Italian appetizer featuring toasted bread topped with fresh tomatoes, garlic, basil, and olive oil." />
                    <Special title="Lemon Dessert" price="$5.00" foodItem={LemonDessert} description="A zesty lemon dessert bursting with mouth-watering citrus flavor." />
                </div>
            </div>
        </section>
    )
}