import './App.css';
import {useState} from 'react';
import { getAllByTitle } from '@testing-library/react';

function App() {
const originalData = [{"ma":44}, {"pe":100}, {"ke": 21}, {"ti": 66}, {"la":22}];
const [data, setData] = useState([]);
//const days = [{"ma":0, "ti":1, "ke:":2, "to":3, "pe":4, "la":5, "su":6}];
const betterData = [{day: "ma", order:0, h: 44},
                    {day: "pe", order:4, h:100},
                    {day: "ke", order:2, h: 21}, 
                    {day: "ti", order:1, h: 66}, 
                    {day: "la", order:5, h: 22}]

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
        {console.log(originalData)}
        {data.map(item => <div>{item.day} {item.h}</div>)}

    </div>
);
}
export default App;