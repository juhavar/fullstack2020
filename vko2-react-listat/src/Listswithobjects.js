import './App.css';
import {useState} from 'react';

function App() {
  const [lista1, SetLista1] = useState( {firstName: "Matti", secondName: "Meikäläinen", age:50},
                                        {firstName: "Tatti", secondName: "Teikäläinen", age:25},
                                        {firstName: "Katti", secondName: "Keikäläinen", age:5});

  const [valinta, setValinta] = useState("");


  
  // const listaaPainettu = (joukkue, index) =>{
  //   //let v = `${joukkue}[${index}]`
  //   let v = index;
  //   setValinta(v);
  // }

  // const vaihto = (suunta) => {
      
  //   let temp1 = [...lista1];
  //   let temp2 = [...lista2];
  //   console.log(valinta);
  //   if(suunta===1){
  //     let nimi = temp1[valinta];
  //     temp1.splice(valinta,1);
  //     temp2.push(nimi);
  //     SetLista1(temp1);
  //     SetLista2(temp2);
      
  //   }
  //   else if(suunta===0){
  //     let nimi = temp2[valinta];
  //     temp2.splice(valinta,1);
  //     temp1.push(nimi);
  //     SetLista1(temp1);
  //     SetLista2(temp2);
  //   }
  //   console.log(lista1);
  //   console.log(lista2);


  // }

  // const sorttaus = (lista) => {
  //   switch(lista){
  //     case 1:{
  //       let tempList = [...lista1];
  //       tempList.sort();
  //       SetLista1(tempList);
  //       break;
  //     }
  //     case 2:{
  //       let tempList = [...lista2];
  //       tempList.sort();
  //       SetLista2(tempList);
  //       break;
  //     }
  //     default:{
  //       alert("Error");
  //       break;
  //     }
  //   }
  // }
  // const nappiaPainettu = (event, index) => () => {
    
    
  // }

  // const listaMuutos = (event, index)=>{
    
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <button onClick={()=>{sorttaus(1)}}>Sort</button>
  //     <button onClick={()=>{lisaaNimi()}}>Lisää</button>
  //     {lista1.map((item, index)=><input key={index} onChange={(event)=> listaMuutos(event, index)} value={item} onClick={event=> listaaPainettu(lista1, index)}></input>)}
      
  //     <button onClick={event => vaihto(0)}>vasemmalle</button>
  //     <button onClick={event => vaihto(1)}>oikealle</button>

  //     {lista2.map((item, index)=><input key={index} onChange={(event)=> listaMuutos(event, index)} value={item} onClick={event=> listaaPainettu(lista2, index)}></input>)}
  //     <button onClick={()=>{sorttaus(2)}}>Sort</button>
  //     </header>
  //   </div>
  // );
}

export default App;
