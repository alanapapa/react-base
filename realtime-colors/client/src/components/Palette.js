import React, { useState } from "react";
import { send } from "../socketAPI";

const Palette = ({ activeColor }) => {
  const [color, setColor] = useState("#000000");

  return (
    <div className="palette">
      <h1 className={activeColor[1] < "5" ? "white" : ""}>{color}</h1>
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
    </div>
  );
};

export default Palette;
