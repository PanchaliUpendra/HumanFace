import React from 'react';
import './images.css';

function Images(props){
    return(
        <div className='image-btn'>
            <img src={`https://robohash.org/${props.image}@robohash.org?gravatar=yes` } alt="" className='image-btn'></img>
        </div>
    )
}
export default Images;