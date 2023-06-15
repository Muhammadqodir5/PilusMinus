import { useState } from "react";
import "./App.css";
export default function App() {
  let [number, setNumber] = useState(0);

  let hedPuls = () => {
    setNumber(number + 1);
  };

  let hedMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button onClick={hedPuls}>Pilus</button>
      <h1>son:{number} </h1>
      <button onClick={hedMinus}>Minus</button>
    </div>
  );
}
