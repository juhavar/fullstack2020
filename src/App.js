import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [lauseke, setLauseke] = useState("");


  const nappiaPainettu = (value)=> {
    if(value==="C"){                  // tyhjäys
      setLauseke("");
    }
    else{
      setLauseke(lauseke+value);
    }
  }
  const laskenta = ()=>{
    setLauseke(eval(lauseke));
    }

  const tilaMuutos = (e) => {

  }

  return (
    <div className="App">
      <header className="Laskin">
        <p>
          <input onChange={(e) => tilaMuutos(e)} value={lauseke}></input><br></br>
               
        
          <button value="7" onClick={e => nappiaPainettu(e.target.value)}>7</button>
          <button value="8" onClick={e => nappiaPainettu(e.target.value)}>8</button>
          <button value="9" onClick={e => nappiaPainettu(e.target.value)}>9</button>
          <button value="/" onClick={e => nappiaPainettu(e.target.value)}>/</button><br></br>
          <button value="4" onClick={e => nappiaPainettu(e.target.value)}>4</button>
          <button value="5" onClick={e => nappiaPainettu(e.target.value)}>5</button>
          <button value="6" onClick={e => nappiaPainettu(e.target.value)}>6</button>
          <button value="*" onClick={e => nappiaPainettu(e.target.value)}>*</button><br></br>
          <button value="1" onClick={e => nappiaPainettu(e.target.value)}>1</button>
          <button value="2" onClick={e => nappiaPainettu(e.target.value)}>2</button>
          <button value="3" onClick={e => nappiaPainettu(e.target.value)}>3</button>
          <button value="-" onClick={e => nappiaPainettu(e.target.value)}>-</button><br></br>
          <button value="C" onClick={e => nappiaPainettu(e.target.value)}>C</button>
          <button value="0" onClick={e => nappiaPainettu(e.target.value)}>0</button>
          <button value="+" onClick={e => nappiaPainettu(e.target.value)}>+</button>
          <button onClick={e => laskenta()}>=</button><br></br>
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
