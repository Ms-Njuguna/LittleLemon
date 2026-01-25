import Hero from "../home/Hero"
import Specials from "../home/Specials"
import Testimonials from "../home/Testimonials"
import About from "../home/About"
import Footer from "../components/Footer"

export default function Home(){
    return (
        <>
           <Hero />
           <Specials />
           <Testimonials />
           <About />
           <Footer />
        </>
    )
}