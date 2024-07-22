import React from "react";
import "./stylesheets/form.css";

export default function FormComp (){
    return(
        <>
        <h2>Contacto</h2>

      <form className="formContainer">

        <div className="innerFormContainer">

          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <button type="submit">Enviar</button>

        </div>

      </form>
        </>
    )
}