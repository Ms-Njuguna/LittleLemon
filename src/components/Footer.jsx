import footerlogo from "../assets/Asset 20@4x.png"
import { Link } from "react-router-dom"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#EDEFEE] text-[#403f3f] border-t border-[#dcdcdc]">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10">

        {/* MOBILE: Logo + Back-to-top + icons in a row */}
        <div className="w-full flex items-center justify-between sm:w-auto sm:block">
          {/* Logo */}
          <img src={footerlogo} alt="logo" className="h-12 w-auto md:h-20" />

          {/* Back to top (mobile only) */}
          <button
            type="button"
            onClick={scrollToTop}
            className="sm:hidden flex items-center gap-2 px-3 py-2 rounded-2xl border border-[#495E57] text-[#495E57] text-sm font-semibold hover:bg-[#495E57] hover:text-white transition"
            aria-label="Back to top"
          >
            <span>Go back to the top</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
              <path d="M440-160v-447L336-503l-56-57 200-200 200 200-56 57-104-104v447h-80Z" />
            </svg>
          </button>

          {/* Icon-only social column (same height as logo) */}
          <div className="h-12 flex flex-col justify-between sm:hidden">
            {/* Email */}
            <a href="mailto:support@glowlab.com" aria-label="Email" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#495E57">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="22px" fill="#495E57" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop nav links (unchanged). Hidden on mobile */}
        <ul className="hidden sm:flex pt-6 gap-8">
          <li className="font-bold text-[#495E57] hover:text-[#F4CE14] p-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F4CE14] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold text-[#495E57] hover:text-[#F4CE14] p-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F4CE14] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100">
            <Link to="/">About</Link>
          </li>
          <li className="font-bold text-[#495E57] hover:text-[#F4CE14] p-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F4CE14] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100">
            <Link to="/">Reserve A Table</Link>
          </li>
          <li className="font-bold text-[#495E57] hover:text-[#F4CE14] p-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F4CE14] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100">
            <Link to="/">Order Online</Link>
          </li>
        </ul>

        {/* Desktop icon-only social */}
        <div className="hidden sm:block">
          <ul className="space-y-3 text-sm pt-4">
            <li>
              <a href="mailto:support@littlelemon.com" aria-label="Email" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#495E57">
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="22px" fill="#495E57" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#bebdbd43] mt-1 text-center text-xs sm:text-sm px-4 sm:pl-6 py-4 text-gray-500">
        © 2026 Little Lemon. Designed & developed by Patricia Njuguna. Portfolio project.
      </div>
    </footer>
  )
}
