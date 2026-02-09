import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden min-h-screen flex flex-col">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
