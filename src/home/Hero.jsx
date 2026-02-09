import Button from "../components/Button"
import Food from "../assets/restauranfood.jpg"
import Lemon from "../assets/image.webp"

export default function Hero({ "data-cy": dataCy }){
    return (
        <section data-cy={dataCy} className="relative bg-[#495E57] text-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
            src={Lemon}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -right-2 top-2
              md:right-72 md:top-1/2 md:-translate-y-1/2
              w-55 md:w-105
              -rotate-6
              opacity-9
              pointer-events-none select-none
            "
            />

            {/* Right side lemon (desktop) – random-ish on mobile */}
            <img
            src={Lemon}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -right-10 top-[65%]
              md:right-2 md:top-29
              w-35 md:w-55
              rotate-12
              opacity-[0.08]
              pointer-events-none select-none
            "
            />

            {/* Bottom-left lemon (desktop) – random-ish on mobile */}
            <img
            src={Lemon}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -left-8 top-36
              md:-left-10 md:-bottom-15 md:top-auto
              w-40 md:w-65
              rotate-22
              opacity-[0.06]
              pointer-events-none select-none
            "
            />
            </div>
            <div className="relative z-10 max-w-6xl max-h-174.25 md:max-h-105 mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F4CE14]">Little Lemon</h1>
                    <h3 className="text-xl md:text-2xl mt-1">Chicago</h3>
                    <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md">Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    <div className="mt-6">
                        <Button label="Reserve A Table" className="bg-[#F4CE14] text-[#000000] border-[#F4FE14]"/>
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end md:pt-28">
                    <img
                    src={Food}
                    alt="Restaurant food"
                    className="w-100 h-100 max-w-xs md:max-w-sm md:h-100 rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}