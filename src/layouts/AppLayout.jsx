import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function AppLayout() {
    return (
        <div className="overflow-x-hidden min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}