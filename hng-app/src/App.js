import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}
export default App;