import React from 'react';
import 'parts/Card.css';

function Card({title,imageUrl,body}){
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
            <div className="card-title">
                <h5>{title}</h5>
            </div>
            <div className="card-body">
                <h6>{body}</h6>
            </div>
            </div>
        </div>
    )
}

export default Card