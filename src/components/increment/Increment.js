import React, { useState } from 'react'; 

export default function Increment() { 
    const [value, setValue ] = useState(0); 

    const handleIncrementClick = () => { 
        setValue(value+1); 
    }

    const handleDecrementClick = () => { 
        setValue(value-1);
    }

    
        return(
            <>
                <h2>Value: {value}</h2> 
                <button onClick={handleIncrementClick}>Increment + </button>
                <button onClick={handleDecrementClick}>Decrement - </button>
            </>
        )
    
}