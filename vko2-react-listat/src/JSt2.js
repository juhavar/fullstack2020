import './App.css';
import {useState} from 'react';
import { getAllByTitle } from '@testing-library/react';

function App() {
const originalData = [{"ma":44}, {"pe":100}, {"ke": 21}, {"ti": 66}, {"la":22}];
const [data, setData] = useState([]);
const betterData = [{day: "ma", order:0, h: 44},
                    {day: "pe", order:4, h:100},
                    {day: "ke", order:2, h: 21}, 
                    {day: "ti", order:1, h: 66}, 
                    {day: "la", order:5, h: 22}]

// const constructBetterData = () =>{
//     console.log(originalData);
//     let constructor = JSON.stringify(originalData);
//     console.log(constructor);
//     constructor.replace("ma","day: \"ma\" , order:0, h");
//     constructor.replace("ti","day: \"ti\" , order:1, h");
//     constructor.replace("ke","day: \"ke\" , order:2, h");
//     constructor.replace("to","day: \"to\" , order:3, h");
//     constructor.replace("pe","day: \"pe\" , order:4, h");
//     constructor.replace("la","day: \"la\" , order:5, h");
//     constructor.replace("su","day: \"su\" , order:6, h");
//     let tData = JSON.parse(JSON.stringify(constructor));
//     setData(tData);
// }

const buttonClick = () => {
    
    let newData = JSON.parse(JSON.stringify(betterData));
    let tData = data.concat(newData);
    setData(tData);
}

const sortDataByValues = () => {
    let sortData = JSON.parse(JSON.stringify(data));
    sortData.sort(function(a,b) {return a.h - b.h});
    setData(sortData);
}

const sortDataByKeys = () => {
    let sortData = JSON.parse(JSON.stringify(data));
    sortData.sort(function(a,b) {return a.order - b.order});
    setData(sortData);
}

const evenValues = () => {
    let filteredData = data.filter(val => val.h %2 === 0);
    setData(filteredData);
    }

const secondLetter = () => {
    let filteredData = data.filter(val => val.day.indexOf("e")=== 1);
    setData(filteredData);
}

return (
    <div className="App">
        <button onClick = {buttonClick}>klik</button>
        <button onClick = {sortDataByValues}>sort by values</button>
        <button onClick = {sortDataByKeys}>sort by keys</button>
        <button onClick = {evenValues}>evens</button>
        <button onClick = {secondLetter}>2nd letter is e</button>

        {data.map(item => <div>{item.day} {item.h}</div>)}

    </div>
);
}
export default App;