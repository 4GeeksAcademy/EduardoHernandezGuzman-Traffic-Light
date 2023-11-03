import React, { useState } from "react";

const TrafficLight = () => {
	
  const [ color, setColor] = useState("");
  
  return (
      <div>
          <div onClick={() => {
              setColor("rojo");
          }} style={{
              color: color === "rojo" ? "red" : "black",backgroundColor: "black"
          }}>
              <h1>O</h1>
          </div>

          <div onClick={() => {
              setColor("amarillo");
          }} style={{
              color: color === "amarillo" ? "yellow" : "black",backgroundColor: "black"
          }}>
              <h1>O</h1>
          </div>

          <div onClick={() => {
              setColor("verde");
          }} style={{
              color: color === "verde" ? "green" : "black",backgroundColor: "black"
          }}>
              <h1>O</h1>
          </div>
      </div>
	);
};

export default TrafficLight;
