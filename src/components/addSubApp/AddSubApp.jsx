import React from 'react'
import { useState } from 'react'
import Addition from '../addition/Addition'
import Clear from '../clear/Clear'
import Inputfield from '../inputfield/Inputfield'


import Subtraction from '../subtraction/Subtraction'

function AddSubApp() {

    const [inputText, setText]=useState('');
    const [output ,setOutput]=useState(0);
   
    const inputChangeHandler = (event) => {
                    const value = event.target.value;
                    setText(value);
                } 
    const add = () =>
    {
        setOutput(Number(output) + Number(inputText));
        setText('')
    } 

    const sub=()=> {
        setOutput(Number(output) - Number(inputText));
        setText('')
    }
    
    const clr=()=> {
        setOutput(0);
        setText('')
    }


    return (
        <>
            <Inputfield value={inputText} inputChangeHandler={inputChangeHandler}/>
            <Addition add={add} />
            <Subtraction sub={sub} />
            <Clear clr={clr} />
            <span>Result</span>
            <div id="Result">{output}</div>
     
        </>
    );
};

export default AddSubApp;