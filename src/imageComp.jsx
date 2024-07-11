import React from "react";
import BotonComp from "../buttonComp";
import "../stylesheets/image.css"

export default function ImageComp () {
    return (
        <>
        <div className="bgContainer">
            <div className="txtContainer">
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quisquam.</p>
                <BotonComp text="Info"></BotonComp>
            </div>
        </div>
        </>
    )
}