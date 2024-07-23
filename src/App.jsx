
import './App.css'
import React from 'react'
import NavbarComp from '../navbar'
import BotonComp from '../buttonComp'
import FormComp from '../formComp'
import ImageComp from './imageComp'
import Section1 from './section1'
import FooterComp from './footerComp'
import CarouselComp from './carouselcomp'
import AboutComp from './aboutComp'

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
           <AboutComp/>
       </section>

       <section id="services">
           <CarouselComp/>
       </section>

       <section id="contact">
          <FormComp/>
       </section>
     </main>

     
     
     <FooterComp/>

    </>
  )
}

export default App
