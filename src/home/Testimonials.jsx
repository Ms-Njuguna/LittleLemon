import Testimonial from "../components/Testimonial"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import Lemon from "../assets/image.webp"

export default function Testimonials({ "data-cy": dataCy }) {
  return (
    <section
      data-cy={dataCy}
      className="relative bg-[#333333] text-white py-16 overflow-hidden"
    >
      {/* Watermark lemons */}
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
            opacity-[0.09]
            pointer-events-none select-none
          "
        />

        {/* Right lemon */}
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

        {/* Bottom-left lemon */}
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Testimonials
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Testimonial
            profile={p1}
            firstName="Joe"
            userName="@joe"
            review="Loved the service!"
          />
          <Testimonial
            profile={p2}
            firstName="Alice"
            userName="@alice"
            review="Amazing ambience!"
          />
          <Testimonial
            profile={p3}
            firstName="Kelly"
            userName="@kelly"
            review="Food was 🔥"
          />
          <Testimonial
            profile={p4}
            firstName="Earl"
            userName="@earl"
            review="10/10 experience"
          />
        </div>
      </div>
    </section>
  )
}