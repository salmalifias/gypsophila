import React from 'react';
import 'parts/Cardsimple.css';

function Cardsimple({title,body}){
    return (
        <div className='card-containerrr'>
            <div className="card-contentt">
                <div className="card-titlee" style={{textAlign:"left"}}>
                    <h5 style={{textAlign:"left"}}>{title}</h5>
                </div>
                <div className="card-bodyy">
                    <p style={{textAlign:"left"}}>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Cardsimple