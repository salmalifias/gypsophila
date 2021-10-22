import React from 'react';
import 'parts/Cardp.css';

function Cardp({imageUrl, body1, body2, body3}){
    return (
        <div className='card-container2'>
            <div className='ListGroup1'>
                <div className='ListGroup.Item'>    
                    <p>{body1}</p>
                </div>
            </div>
            <div className='ListGroup1'>
                <div className='ListGroup.Item'>
                    <p>{body2}</p>
                </div>
            </div>
            <div className='ListGroup1'>
                <div className='ListGroup.Item'>
                    <p>{body3}</p>
                </div>
            </div>
        </div>
    )
}

export default Cardp