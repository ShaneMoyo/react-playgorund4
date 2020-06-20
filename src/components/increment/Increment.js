import React, { useState } from 'react'; 

export default function Increment() { 
    const [value1, setValue1 ] = useState(0); 
    const [value2, setValue2 ] = useState(0); 

    const handleIncrementClick1 = () => { 
        setValue1(value1+1); 
    }

    const handleDecrementClick1 = () => { 
        setValue1(value1-1);
    }

    const handleIncrementClick2 = () => { 
        setValue2(value2+1); 
    }

    const handleDecrementClick2 = () => { 
        setValue2(value2-1);
    }

    
        return(
            <>
                <h2>Value1: {value1}</h2> 
                <button onClick={handleIncrementClick1}>Increment + </button>
                <button onClick={handleDecrementClick1}>Decrement - </button>
                <h2>Value2: {value2}</h2> 
                <button onClick={handleIncrementClick2}>Increment + </button>
                <button onClick={handleDecrementClick2}>Decrement - </button>
            </>
        )
    
}