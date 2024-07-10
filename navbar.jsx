import React,{ useState } from "react"
import BotonComp from "./buttonComp"
import "./stylesheets/navbar.css"

export default function NavbarComp(){

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {setIsOpen(!isOpen);};

    return(
        <>
         <nav className="navBarStyle">

           <div class="logo">Mi Logo</div>

           <button className="dropdown-button" onClick={toggleDropdown}> Menu </button>

            <ul className={`nav-links ${isOpen ? "show" : ""}`}>

               <li><a href="#home">Inicio</a></li>
               <li><a href="#about">Acerca de</a></li>
               <li><a href="#services">Servicios</a></li>
               <li><a href="#contact">Contacto</a></li>

            </ul>

       </nav>
        </>
    )
}