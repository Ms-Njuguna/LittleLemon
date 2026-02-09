import Testimonial from "../components/Testimonial"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

export default function Testimonials({ "data-cy": dataCy }){
    return(
        <section data-cy={dataCy} className="bg-[#333333] text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Testimonials</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Testimonial profile={p1} firstName="Joe" userName="@joe" review="Loved the service!" />
                    <Testimonial profile={p2} firstName="Alice" userName="@alice" review="Amazing ambience!" />
                    <Testimonial profile={p3} firstName="Kelly" userName="@kelly" review="Food was 🔥" />
                    <Testimonial profile={p4} firstName="Earl" userName="@earl" review="10/10 experience" />
                </div>
            </div>
        </section>
    )
}