import "./styles.css";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState(0);
  const [prevalue, setPrevalue] = useState(null);
  const [methed, setMethed] = useState(false);
  const [methedCal, setMethedCal] = useState(null);

  const handleClickNumber = (e) => {
    if (methed === "=") {
      setDisplay(e.target.value);
      setMethed(false);
    } else if (methed) {
      setDisplay(e.target.value);
      setMethed(false);
    } else if (display === 0) {
      setDisplay(e.target.value);
    } else {
      setDisplay(display + e.target.value);
    }
  };

  const handleClickCiear = () => {
    setDisplay(0);
    setMethed(false);
    setMethedCal(null);
  };

  const handleClickOperater = (e) => {
    if (methedCal === "+") {
      setDisplay(Number(prevalue) + Number(display));
      setPrevalue(Number(prevalue) + Number(display));
    } else if (methedCal === "-") {
      let result = prevalue - display;
      setDisplay(result);
      setPrevalue(result);
    } else if (methedCal === "x") {
      let result = prevalue * display;
      setDisplay(result);
      setPrevalue(result);
    } else if (methedCal === "/") {
      let result = prevalue / display;
      setDisplay(result);
      setPrevalue(result);
    } else {
      setPrevalue(display);
    }
    setMethed(true);
    setMethedCal(e.target.id);
  };

  const handleClickEqual = () => {
    if (methedCal === "+") {
      let result = Number(prevalue) + Number(display);
      setDisplay(result);
    } else if (methedCal === "-") {
      let result = prevalue - display;
      setDisplay(result);
    } else if (methedCal === "/") {
      let result = prevalue / display;
      setDisplay(result);
    } else if (methedCal === "x") {
      let result = prevalue * display;
      setDisplay(result);
    }
    setMethed(true);
    setMethedCal(null);
  };

  const hancleClickToggle = () => {
    setDisplay(-display);
  };

  const handleClickPercent = () => {
    setDisplay(display / 100);
  };

  return (
    <div className="App">
      <p>{display}</p>
      <div className="btn-container">
        <button className="row-operator" onClick={handleClickCiear}>
          AC
        </button>
        <button className="row-operator" onClick={hancleClickToggle}>
          +/-
        </button>
        <button className="row-operator" onClick={handleClickPercent}>
          %
        </button>
        <button
          className="colomn-operator"
          id="/"
          onClick={(e) => handleClickOperater(e)}
        >
          ÷
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="7"
        >
          7
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="8"
        >
          8
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="9"
        >
          9
        </button>
        <button
          className="colomn-operator"
          id="x"
          onClick={(e) => handleClickOperater(e)}
        >
          x
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="4"
        >
          4
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="5"
        >
          5
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="6"
        >
          6
        </button>
        <button
          className="colomn-operator"
          id="-"
          onClick={(e) => handleClickOperater(e)}
        >
          -
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="1"
        >
          1
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="2"
        >
          2
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="3"
        >
          3
        </button>
        <button
          className="colomn-operator"
          id="+"
          onClick={(e) => handleClickOperater(e)}
        >
          +
        </button>
        <button
          className="big-btn"
          onClick={(e) => handleClickNumber(e)}
          value="0"
        >
          0
        </button>
        <button
          className="number"
          onClick={(e) => handleClickNumber(e)}
          value="."
        >
          .
        </button>
        <button className="colomn-operator" onClick={handleClickEqual}>
          =
        </button>
      </div>
    </div>
  );
}
