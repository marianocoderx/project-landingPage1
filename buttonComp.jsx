import React from "react";

export default function BotonComp({ text, onClick }) {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    );
  }