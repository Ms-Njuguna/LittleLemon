import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const cartCount = 0 // later replace with real cart state

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={Logo} alt="Little Lemon Logo" className="h-8" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-[#495E57]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Reserve A Table</Link></li>
            <li><Link to="/">Order Online</Link></li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">

            {/* CART — YOUR SVG */}
            <Link to="/cart" className="relative flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Z"/>
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* LOGIN — YOUR SVG */}
            <Link to="/login" className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
              </svg>
              <span className="text-sm font-semibold">Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 font-semibold text-[#495E57]">

          <button
            onClick={() => setOpen(false)}
            className="self-end text-xl"
            aria-label="Close menu"
          >
            ✕
          </button>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setOpen(false)}>About</Link>
          <Link to="/" onClick={() => setOpen(false)}>Reserve A Table</Link>
          <Link to="/" onClick={() => setOpen(false)}>Order Online</Link>

          <hr />

          {/* Cart (Mobile) */}
          <Link to="/cart" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000">
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Z"/>
            </svg>
            Cart ({cartCount})
          </Link>

          {/* Login (Mobile) */}
          <Link to="/login" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000">
              <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
            </svg>
            Login
          </Link>
        </div>
      </aside>
    </>
  )
}
