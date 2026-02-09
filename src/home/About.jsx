import MA1 from "../assets/mario-adrian-1.jpg"
import MA2 from "../assets/mario-adrian-2.jpg"

export default function About({ "data-cy": dataCy }){
    return (
        <section data-cy={dataCy} className="py-12 bg-[#EDEFEE]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">A Little Back Story</h1>
                    <p className="mt-4 text-sm leading-relaxed max-w-md">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                </div>
                <div className="flex-1 relative min-h-75 flex flex-col gap-4 md:block">
                    <img src={MA1} alt="Mario cooking in the kitchen" className="w-65 md:w-80 rounded-t-xl rounded-bl-xl shadow-lg md:absolute md:top-0 md:left-6 mr-4"/>
                    <img src={MA2} alt="Adrian planning marketing" className="w-65 md:w-80 rounded-b-xl rounded-tr-xl shadow-lg md:absolute md:bottom-0 md:right-0 ml-14"/>
                </div>
            </div>
        </section>
    )
}