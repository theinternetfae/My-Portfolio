import Header from "./Header.jsx";
import Body from "./Body.jsx";
import About from "./About.jsx"
import Loader from "./Loader.jsx"
import { Routes, Route, useLocation } from "react-router-dom";
import {useState, useEffect} from "react";


function App() {

  const location = useLocation();
  const [loading, setLoading] = useState(true);

  //INITIAL LOADING
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);

  }, [])

  //SWITCH-SCREEN LOADING
  const [nextLocation, setNextLocation] = useState(location);

  useEffect(() => {
    if (location !== nextLocation) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setNextLocation(location); 
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [location, nextLocation]);

  return (
    <main className='test'>
      {loading ? <Loader/> : ''}
      <Header/>
      
      <Routes location={nextLocation}>
        <Route path="/" element={<Body />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    
    </main>
  )
}

export default App