
import './App.css'
import React from 'react'
import NavbarComp from '../navbar'
import BotonComp from '../buttonComp'
import FormComp from '../formComp'

function App() {

    const handleClick = () => {alert('Botón clicado');}  

     return (
       
    <>
      
     <header>
        <NavbarComp/>
     </header>

     <main>
       <section id="home">
           <BotonComp text="Empezar" onClick={handleClick} />
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
