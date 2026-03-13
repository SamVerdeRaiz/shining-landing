import { useEffect } from "react";

import Loader from "./Loader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Ubicacion from "./Ubicacion";
import Footer from "./Footer";
import Promo from "./Promo";
import Testimonio from "./Testimonio";
import WhatsappButton from "./WhatsappButton"



import "./style.css";

function App() {

  useEffect(()=>{

    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("visible")
        }
      })
    })

    document.querySelectorAll(".fade-in").forEach(el=>{
      observer.observe(el)
    })

  },[])

  return (
    <>
    <Loader />

      <Navbar />

      <Hero />

      <Services />

      <Testimonio />

      <Ubicacion />

      <Footer />

      <Promo />

      <WhatsappButton/>

      <a
        href="https://wa.me/525549001520"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>

    </>
  );
}

export default App;