
import './App.css'
import React from 'react'
import NavbarComp from '../navbar'
import BotonComp from '../buttonComp'
import FormComp from '../formComp'
import ImageComp from './imageComp'
import Section1 from './section1'

function App() {

    const handleClick = () => {alert('Botón clicado');}  

     return (
       
    <>
      
     <header>
        <NavbarComp/>
     </header>

     <main>

       <section>
          <ImageComp></ImageComp>
       </section>

       <section id="home">
           <Section1/>
       </section>

       <section id="about">
           <BotonComp text="Aprende mas" onClick={handleClick} />
       </section>

       <section id="services">
           <BotonComp text="Conocelos" onClick={handleClick} />
       </section>

       <section id="contact">
          <FormComp/>
       </section>
     </main>

     <footer>
       <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
     </footer>

    </>
  )
}

export default App
