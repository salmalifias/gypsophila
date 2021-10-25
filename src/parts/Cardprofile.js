import React from 'react';
import 'parts/Cardprofile.css';

function Cardprofile({title, body1, body2, body3, body4}){
    return (
        <div className='card-container3'>
                <h5 style={{marginLeft:"30px"}}>{title}</h5>
                <div className='label'>
                    <p>{body1}</p>
                    <input style={{width:"100%", borderRadius:"5px", borderWidth:"1px"}} type="text" name="name" placeholder={body1}/>
                </div>
                <div className='label'>
                    <p>{body2}</p>
                    <input style={{width:"100%", borderRadius:"5px", borderWidth:"1px"}} type="text" name="name" placeholder={body2}/>
                </div>
                <div className='label'>
                    <p>{body3}</p>
                    <input style={{width:"100%", borderRadius:"5px", borderWidth:"1px"}} type="text" name="name" placeholder={body3}/>
                </div>
                <div className='label'>
                    <p>{body4}</p>
                    <input style={{width:"100%", borderRadius:"5px", borderWidth:"1px"}} type="text" name="name" placeholder={body4}/>
                </div>
        </div>
    )
}

export default Cardprofile