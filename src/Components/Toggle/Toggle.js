import React, { useState } from 'react';
import './Toggle.css'
const Toggle = () => {

    const [status,setStatus] = useState(true)
    return(
        <>
        {status ? 
            <div className='toogle-example'>
                Swarnali Ghosh
            </div>
            :
            <div className='empty'></div>
        }
            <button onClick={()=>{setStatus(true)}}>show</button>
            <button onClick={()=>{setStatus(false)}}>hide</button>
            <button onClick={()=>{setStatus(!status)}}>toggle</button>
        </>
    )
}

export default Toggle;