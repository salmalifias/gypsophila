import React from 'react';
import 'parts/Card.css';
import { Link } from 'react-router-dom';

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
            <div className="btn">
                <Link className="mx-auto" type="link" to={{ pathname: "https://drive.google.com/drive/folders/1JKgfVDj-vd-e--La79KMZcHuz9W_CszH?usp=sharing" }} target="_blank">
                <button>
                    <a>
                        View Portfolio
                    </a>
                </button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Card