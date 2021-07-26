import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My favorite Food
    </h1>
    <ul>
      <li>Protein</li>
      <li>Carbs</li>
      <li>Fats</li>
    </ul>
  </div>,
  rootElement
);
