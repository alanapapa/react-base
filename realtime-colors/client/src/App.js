import "./App.css";
import { init, subscribe } from "./socketAPI";
import Palette from "./components/Palette";
import { useEffect, useState } from "react";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");

  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
