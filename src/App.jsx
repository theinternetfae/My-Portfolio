import Header from "./Header.jsx";
import Body from "./Body.jsx";
import About from "./About.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <main className='test'>

        <Header/>
        
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      
      </main>
    </BrowserRouter>
  )
}

export default App