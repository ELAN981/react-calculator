import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value))
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => Number(inputRef.current.value) !== 0
        ? result / Number(inputRef.current.value)
        : "Can't divide by 0"
    );
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }
 
  function resetResult(e) { 
    e.preventDefault();
    setResult((result) => result!== 0? 0 : result)
  }; 

 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <h3 ref={resultRef}> 
          current result: 
          {result} 
        </h3> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
<div className="first">
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>Erase</button> 
        <button onClick={resetResult}>Reset</button>
</div>
        <div className="inputs">
          <div className="row1">
            <button type="button" onClick={() => inputRef.current.value += "7"}>7</button>
            <button type="button" onClick={() => inputRef.current.value += "8"}>8</button>
            <button type="button" onClick={() => inputRef.current.value += "9"}>9</button>
          </div>
          <div className="row2">
            <button type="button" onClick={() => inputRef.current.value += "4"}>4</button>
            <button type="button" onClick={() => inputRef.current.value += "5"}>5</button>
            <button type="button" onClick={() => inputRef.current.value += "6"}>6</button>
          </div>
          <div className="row3">
            <button type="button" onClick={() => inputRef.current.value += "1"}>1</button>
            <button type="button" onClick={() => inputRef.current.value += "2"}>2</button>
            <button type="button" onClick={() => inputRef.current.value += "3"}>3</button>
          </div>
          <div className="row4">
            <button type="button" onClick={() => inputRef.current.value += "0"}>0</button>
          </div>
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
