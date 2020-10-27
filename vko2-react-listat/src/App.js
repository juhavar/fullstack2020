import './App.css';
import {useState} from 'react';

function App() {
  const [lista1, SetLista1] = useState(["Julius", "Jukka", "Juuso", "Aapo"]);
  const [lista2, SetLista2] = useState(["Jussi", "Timo", "Ville", "Kalle"]);
  const [valinta, setValinta] = useState("");

  function lisaaNimi()  {
    let temp1 = [...lista1];
    temp1.concat("Seija");
    SetLista1(temp1);
  }
  const listaaPainettu = (joukkue, index) =>{
    //let v = `${joukkue}[${index}]`
    let v = {index};
    setValinta(v);
    console.log(v);
  }

  const vaihto = (suunta) => {
      
    let temp1 = [...lista1];
    let temp2 = [...lista2];
    console.log(valinta);
    if(suunta===1){
      temp1.splice(valinta,1);
      temp2.concat(valinta.toString(),1);
      SetLista1(temp1);
      SetLista2(temp2);
      
    }
    else if(suunta===0){
      temp2.splice(valinta,1);
      temp1.concat(valinta.toString(),1);
      SetLista1(temp1);
      SetLista2(temp2);
    }
    console.log(lista1);
    console.log(lista2);
    setValinta("");

  }

  const sorttaus = (lista) => {
    switch(lista){
      case 1:{
        let tempList = [...lista1];
        tempList.sort();
        SetLista1(tempList);
        break;
      }
      case 2:{
        let tempList = [...lista2];
        tempList.sort();
        SetLista2(tempList);
        break;
      }
      default:{
        alert("Error");
        break;
      }
    }
  }
  const nappiaPainettu = (event, index) => () => {
    
    
  }

  const listaMuutos = (event, index)=>{
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=>{sorttaus(1)}}>Sort</button>
      <button onClick={()=>{lisaaNimi()}}>Lisää</button>
      {lista1.map((item, index)=><input key={index} onChange={(event)=> listaMuutos(event, index)} value={item} onClick={event=> listaaPainettu(lista1, index)}></input>)}
      
      <button onClick={event => vaihto(0)}>vasemmalle</button>
      <button onClick={event => vaihto(1)}>oikealle</button>

      {lista2.map((item, index)=><input key={index} onChange={(event)=> listaMuutos(event, index)} value={item} onClick={event=> listaaPainettu(lista2, index)}></input>)}
      <button onClick={()=>{sorttaus(2)}}>Sort</button>
      </header>
    </div>
  );
}

export default App;
