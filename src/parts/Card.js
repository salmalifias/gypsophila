import React from 'react';
import 'parts/Card.css';

function Card({title,imageUrl,subtitle,body}){
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
            <div className="card-title">
                <h4 className="text-center">{title}</h4>
            </div>
            <div className="card-subtitle">
            <p className="mb-2 text-muted text-center">{subtitle}</p>
            </div>
            <div className="card-body">
            <h6 className="text-center">{body}</h6>
            </div>
            </div>
        </div>
    )
}

export default Card