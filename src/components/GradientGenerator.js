import React, { useState } from "react";
import "./GradientGenerator.css"; // Import the CSS file

const GradientGenerator = () => {
  const [colors, setColors] = useState(["#ff0000", "#0000ff"]);
  const [gradientType, setGradientType] = useState("linear");

  // Generate CSS gradient string
  const gradientCSS = `${gradientType}-gradient(${gradientType === "linear" ? "to right, " : ""}${colors.join(", ")})`;

  // Handle adding a new color input
  const addColor = () => {
    setColors([...colors, "#ffffff"]);
  };

  // Handle changing color values
  const updateColor = (index, value) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  // Copy gradient CSS to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background: ${gradientCSS};`);
    alert("Gradient CSS copied to clipboard!");
  };

  return (
    <div className="gradient-container">
      <h2>🎨 Gradient Generator</h2>

      <div className="color-inputs">
        {colors.map((color, index) => (
          <input
            key={index}
            type="color"
            value={color}
            onChange={(e) => updateColor(index, e.target.value)}
          />
        ))}
        <button className="add-color-btn" onClick={addColor}>+ Add Color</button>
      </div>

      <div className="gradient-options">
        <label>
          <input
            type="radio"
            value="linear"
            checked={gradientType === "linear"}
            onChange={() => setGradientType("linear")}
          /> Linear
        </label>
        <label>
          <input
            type="radio"
            value="radial"
            checked={gradientType === "radial"}
            onChange={() => setGradientType("radial")}
          /> Radial
        </label>
        <label>
          <input
            type="radio"
            value="conic"
            checked={gradientType === "conic"}
            onChange={() => setGradientType("conic")}
          /> Conic
        </label>
      </div>

      <div className="gradient-preview" style={{ background: gradientCSS }}>
        <p>Live Gradient Preview</p>
      </div>

      <button className="copy-btn" onClick={copyToClipboard}>📋 Copy CSS</button>
    </div>
  );
};

export default GradientGenerator;
