import React from "react";
import '../stylesheets/footercomp.css';

export default function FooterComp() {
  return (
    <>
      <footer className="footerContainer">
        <div>
          Nombre de la compañía. Todos los derechos reservados.
        </div>

        <div>
          <ul>
            <li>Historia</li>
            <li>Misión-visión</li>
            <li>Equipo</li>
            <li>Valores</li>
            <li>Logros</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Introducción</li>
            <li>Últimas noticias</li>
            <li>Destacados</li>
            <li>Testimonios</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Consultoría</li>
            <li>Desarrollo de software</li>
            <li>Soporte técnico</li>
            <li>Capacitación</li>
            <li>IT Solutions</li>
          </ul>
        </div>

        <div className="companyDetails">
          <p>© 2024 Nombre de la Compañía. Todos los derechos reservados.</p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          <p>Contacto: contacto@compania.com | +1 234 567 890</p>
        </div>
      </footer>
    </>
  );
}
