import React, { useEffect } from 'react';
import { useState } from 'react'
import Answers from './Answers';
//import './App.css';
// lukumäärä???


//let u = {0:"pekka",1:"leena"}

function App() {
    //array destructuring 
    //let lapset = [{lapsenNimi:"Lissa"},{lapsenNimi:"Kaapo"}] 
    const [data, setData] = useState([])
    //const [sukunimi, setSukunimi]=useState("")???
    const [dataAlustettu, setDataAlustettu] = useState(false)

    const initialData = [
    { q: "Rahat vai kolmipyörä?",
      a: [
        {text: "Rahat", checked: false, correctAnswer: false},
        {text: "Kolmipyörä",checked: false, correctAnswer: true},
        ]
    },
    {  q: "Akun veljenpojat",
       a: [
         {text: "Tupu", checked: false, correctAnswer: true},
         {text: "Hupu", checked: false, correctAnswer: true},
         {text: "Lupu", checked: false, correctAnswer: true}]
    },
    {  q: "Hortensia",
       a: [
         {text: "GLXBLT", checked: false, correctAnswer: true}, 
         {text: "ROMPS", checked: false, correctAnswer: false},
         {text: "GLOM", checked: false, correctAnswer: false}]
    }
  ]

    const [selected, setSelected] = useState([])
    // localSotragen data-avaimena on "data"
    useEffect(() => {

        let jemma = window.localStorage;
        let tempData = JSON.parse(jemma.getItem("data"))
        if (tempData == null) {
          jemma.setItem("data", JSON.stringify(initialData))
          tempData = initialData
        } 
        setData(tempData);
        setDataAlustettu(true)
      }, [])
    
      useEffect(() => {
        if (dataAlustettu) {
          window.localStorage.setItem("data", JSON.stringify(data))
        }
      }, [data])


    const painikePainettu = () => {

        let uusdata = JSON.parse(JSON.stringify(data));
        //    let uusdata = [...data];

        //   uusdata[0].jälkikasvu[0].lapsenNimi="Mikko"
        // let uusdata = [...data];
        let lopullinenData = data.concat(uusdata)
        setData(lopullinenData)
        //setRows([]);
    }
    const näytäJälkikasvu = (index) => {           // itemillä vanhempi
        if (data[index].jälkikasvu !== undefined) {       // onko sillä jälkikasvua
            return data[index].jälkikasvu.map((alkio, lapsenIndex) =>
                <div key={lapsenIndex}>
                    <input onChange={(e) => { lapsenNimiMuuttui(e, index, lapsenIndex) }} value={alkio.lapsenNimi}>
                    </input>
                </div>)

        }
    }

    const lapsenNimiMuuttui = (event, vanhemmanIndex, lapsenIndex) => {

        let syväKopio = JSON.parse(JSON.stringify(data))
        syväKopio[vanhemmanIndex].jälkikasvu[lapsenIndex].lapsenNimi = event.target.value;
        setData(syväKopio)

    }

    const sukunimiMuuttui = (event, index) => {

        let syväKopio = JSON.parse(JSON.stringify(data))
        syväKopio[index].sukunimi = event.target.value;
        setData(syväKopio)

    }


    return (<div>

        {data.map((item, index) => <div key={index}>
        
        <div key={index}>{item.q}</div>

        {/* <div key={index} onChange={(event) => sukunimiMuuttui(event, index)} name = {item.a.text}  >
              </div> */}
            {item.a ? <Answers lapsenNimiMuuttui={lapsenNimiMuuttui} parentIndex = {index} answersList={item.a}></Answers>:""}
            

        </div>)}
        <button onClick={painikePainettu}> Paina minua</button><hr></hr>
    </div>
    );
}

export default App;