import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './HeroHeader'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import 'typeface-nunito';
import AboutUs from './AboutUs'
import Booking from './Booking'
import Process from './Process'
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <>
      <Navbar/>
      <Home />
      <AboutUs/>
      <Booking/>
      <Process/>
      <Footer/>
    </>
    </>
  )
}

export default App
