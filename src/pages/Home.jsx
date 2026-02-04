import Hero from "../home/Hero"
import Specials from "../home/Specials"
import Testimonials from "../home/Testimonials"
import About from "../home/About"

export default function Home(){
    return (
        <>
           <Hero data-cy="hero-section" />
           <Specials data-cy="specials-section" />
           <Testimonials data-cy="testimonials-section" />
           <About data-cy="about-section"/>
        </>
    )
}