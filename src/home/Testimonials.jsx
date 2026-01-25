import Testimonial from "../components/Testimonial"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

export default function Testimonials(){
    return(
        <div>
            <h1>Testimonials</h1>
            <div>
                <Testimonial profile={p3} firstName={'Kelly'} userName={'@that_girl_kelly'} review={'Dope place with very good food...'}/>
                <Testimonial profile={p1} firstName={'Joe'} userName={'@dj_joe36'} review={'Loved the service. Recommend 100%'}/>
                <Testimonial profile={p2} firstName={'Alice'} userName={'@lovey1789'} review={'Their outdoor seating area is to die for!'}/>
                <Testimonial profile={p4} firstName={'Earl'} userName={'@le_earl'} review={'Food + Service + Ambience = 100/10..'}/>
            </div>
        </div>
    )
}