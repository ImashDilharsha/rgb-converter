import React, { useState } from "react";
import "./App.css";
import GradientGenerator from "./components/GradientGenerator";

function RGBConverter() {
  
  const [rgb, setRgb] = useState({ r: "", g: "", b: "" });
  const [hex, setHex] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value) && Number(value) <= 255) {
      setRgb((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleColorPicker = (e) => {
    setColor(e.target.value);
    const r = parseInt(e.target.value.substr(1, 2), 16);
    const g = parseInt(e.target.value.substr(3, 2), 16);
    const b = parseInt(e.target.value.substr(5, 2), 16);
    setRgb({ r, g, b });
    setHex(e.target.value.toUpperCase());
  };

  const convertToHex = () => {
    const { r, g, b } = rgb;
    if (r !== "" && g !== "" && b !== "") {
      const hexCode =
        "#" +
        [r, g, b]
          .map((val) => parseInt(val, 10).toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase();
      setHex(hexCode);
      setColor(hexCode);
    } else {
      setHex("Invalid RGB");
      setColor("#ffffff");
    }
  };

  return (
    <div className="container">
      <div className="card">
      <div className="gradient-container">
      <div className="app">
      <h1>RGB to HEX & Gradient Generator</h1>
      <GradientGenerator />
      </div>

      
        <h2>RGB to HEX Converter</h2>
        <div className="color-preview" style={{ backgroundColor: color }}></div>
        <div className="input-container">
          <input type="number" name="r" placeholder="R (0-255)" value={rgb.r} onChange={handleChange} />
          <input type="number" name="g" placeholder="G (0-255)" value={rgb.g} onChange={handleChange} />
          <input type="number" name="b" placeholder="B (0-255)" value={rgb.b} onChange={handleChange} />
        </div>
        <input type="color" value={color} onChange={handleColorPicker} className="color-picker" />
        <button onClick={convertToHex} className="glowing-button">
          Convert
        </button>
        {hex && <div className="hex-display">HEX Code: <span>{hex}</span></div>}
        </div>
      </div>
    </div>
  );
}

export default RGBConverter;
