import { useRoutes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes"

function App() {
  return useRoutes(AppRoutes)
}

export default App
