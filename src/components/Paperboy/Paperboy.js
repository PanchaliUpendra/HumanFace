import React from 'react';
import { useState } from 'react';
import Images from '../Images/Images';
import './Paperboy.css'
function Paperboy(){
    const [namesingle,setsingle]=useState("");
    const [nameduplicat,setdup]=useState("ROBO");
    const handlechange =(e)=>{
        setsingle(e.target.value);
    }
    const setdata=()=>{
        if(namesingle===""){
            prompt("please enter a valid name");
        }
        else {
            setdup(namesingle);
        }
        setsingle("");
    }
    return(
        <div >
            <h1 className='header'>Please see your Robo face with your name:</h1>
            <div className='input-txt'>
            <form className='form-btn'>
                <input type="text" placeholder="enter your name" onChange={handlechange} value={namesingle} className="input-bar" size="80"></input>
            </form>
            <div className='btn'>
            <button onClick={setdata} className="btn-in">show my face</button>
            </div>
            </div>
            <Images image={nameduplicat}/>
            <h3 className='intro'>Hello Everyone i'm {nameduplicat} ,Nice to meet you</h3>
        </div>
    )
}

export default Paperboy;