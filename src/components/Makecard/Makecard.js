import React from 'react';
import './Markcard.css';

function Makecard(props){
    return(
        <div key={props.item.id} className='kard'>
            <h3 className='fullname'>Full_Name : <strong><i>{props.item.name}</i></strong></h3>
            <p>user_Eamil:{props.item.email}</p>
            <h4>user_Name:{props.item.username}</h4>
        </div>
    );
}
export default Makecard;