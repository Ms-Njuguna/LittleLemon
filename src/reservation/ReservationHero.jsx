import Lemon from "../assets/image.webp";

export default function ReservationHero({ children }) {
  return (
    <section className="relative overflow-hidden bg-[#495E57] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={Lemon}
          alt=""
          aria-hidden="true"
          className="absolute -right-2 top-2 w-55 -rotate-6 opacity-[0.09] pointer-events-none select-none md:right-72 md:top-1/2 md:w-105 md:-translate-y-1/2"
        />

        <img
          src={Lemon}
          alt=""
          aria-hidden="true"
          className="absolute -right-10 top-[65%] w-35 rotate-12 opacity-[0.08] pointer-events-none select-none md:right-2 md:top-29 md:w-55"
        />

        <img
          src={Lemon}
          alt=""
          aria-hidden="true"
          className="absolute -left-8 top-36 w-40 rotate-22 opacity-[0.06] pointer-events-none select-none md:-left-10 md:-bottom-15 md:top-auto md:w-65"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-10 font-serif text-5xl font-bold text-[#F4CE14] md:text-6xl">
          Reservations
        </h1>
        {children}
      </div>
    </section>
  );
}