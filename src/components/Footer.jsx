import footerlogo from "../assets/Asset 20@4x.png"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div>
            <img src={footerlogo} alt="Footer logo" width={50}/>
            <div>
                <ul>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Reserve A Table</Link></li>
                    <li><Link to='/'>Order Online</Link></li>
                </ul>
                <p>© 2026 Little Lemon. Portfolio project created for educational purposes.</p>
            </div>
            <div>
                <p>insta</p>
                <p>fb</p>
            </div>
        </div>
    )
}