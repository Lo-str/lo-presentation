import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Gouffre from "./pages/Gouffre/Gouffre.jsx"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gouffre" element={<Gouffre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
