import Button from "../components/Button"
import Food from "../assets/restauranfood.jpg"

export default function Hero({ "data-cy": dataCy }){
    return (
        <section data-cy={dataCy} className="bg-[#495E57] text-white">
            <div className="max-w-6xl max-h-196.25 mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F4CE14]">Little Lemon</h1>
                    <h3 className="text-xl md:text-2xl mt-1">Chicago</h3>
                    <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md">Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    <div className="mt-6">
                        <Button label="Reserve A Table" />
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                    src={Food}
                    alt="Restaurant food"
                    className="w-full max-w-xs md:max-w-sm rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}