import Header from "./utilComp/Header.jsx";
import Body from "./Body.jsx";
import Landing from "./Landing.jsx";
import About from "./About.jsx"
import Loader from "./utilComp/Loader.jsx"
import { Routes, Route, useLocation } from "react-router-dom";
import {useState, useEffect} from "react";
import Offline from "./Offline.jsx";
import Layout from "./Layout.jsx";


function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [leftLanding, setLeftLanding] = useState(false);


  //CHECKING IS ONLINE
  useEffect(() => {

    const handleOnline = () => {
      setIsOnline(true);
      setLoading(true);
    }
    const handleOffline = () => {
      setIsOnline(false)
    };
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }; 

  }, [isOnline]);







  //ISONLINE LOADING
  useEffect(() => {
    if (isOnline) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOnline]);







  //INITIAL LOADING
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);

  }, [isOnline])






  
  //SWITCH-SCREEN LOADING
  const [nextLocation, setNextLocation] = useState(location);

  useEffect(() => {
    if (location !== nextLocation) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setNextLocation(location); 
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [location, nextLocation]);




  useEffect(() => {
    console.log(leftLanding);
  }, [leftLanding])


  return (
    <>

      {!isOnline ? (
        <Offline/>
      ) : 
      (loading) ? (
        <Loader/>
      ) : (
        
        <>
        
          <Routes location={nextLocation}>

            <Route path="/" element={<Layout/>}>
  
              <Route index element={<Landing/>}/>

              <Route path="about" element={<About />}/>
              <Route path="projects" element={<Body />}/>

            </Route>

          </Routes> 
        
        </>

      )}

    </>
  )
}

export default App