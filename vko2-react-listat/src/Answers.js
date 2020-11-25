import React, {useEffect} from 'react';
import {useState} from 'react';

function Answers(props) {
    // const lapsenNimiMuuttui=(e, index, lapsenIndex) =>{

    // }
    return (<div>
        {props.answersList.map((alkio, answerIndex) =>
                <div key={answerIndex}>
                    <input type="checkbox" onChange={(e) => { props.lapsenNimiMuuttui(e, props.parentIndex, answerIndex) }} label={alkio.text}>
                    </input>
                </div>)}
        </div>
        
    
  
    );
}

export default Answers;