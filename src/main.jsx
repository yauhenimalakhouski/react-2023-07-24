/* eslint-disable react/no-children-prop */
import ReactDOM from "react-dom/client";
import React from "react";
import { Button } from "./components/Button/component";

const root = ReactDOM.createRoot(document.getElementById("root"));

const clickMeText = "ClickMe";

root.render(
  <div id="element" className="myElement">
    <label>Name</label>
    <input />
    <Button text={clickMeText} onClick={() => console.log("Click1")} />
    <Button text={`${clickMeText}2`} onClick={() => console.log("Click2")} />
    <Button text={`${clickMeText}3`} onClick={() => console.log("Click3")} />
  </div>
);

React.createElement("div", {
  id: "element",
  className: "myElement",
  children: [
    React.createElement("label", { children: "Name" }),
    React.createElement("input"),
  ],
});
