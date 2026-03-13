import { useEffect, useState } from "react"

export default function Navbar(){

const [scrolled,setScrolled]=useState(false)

useEffect(()=>{

const handleScroll=()=>{

if(window.scrollY>50){
setScrolled(true)
}else{
setScrolled(false)
}

}

window.addEventListener("scroll",handleScroll)

return()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>

<div className="nav-container">

<img src="/logo.png" className="logo"/>

<ul className="nav-links">

<li><a href="#inicio">Inicio</a></li>
<li><a href="#servicios">Servicios</a></li>
<li><a href="#testimonios">Testimonios</a></li>
<li><a href="#ubicacion">Ubicacion</a></li>
<li><a href="#contacto">Contacto</a></li>

</ul>

</div>

</nav>

)

}