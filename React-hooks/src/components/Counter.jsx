import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const IncreamentCount = () =>{
        setCount(count+1);
    }
    const DecreamentCount = () =>{
        setCount(count-1);
        if (count===0) setCount(0);
        
    }

  return (
    <div>
        <h3> Count :  {count}</h3>
            <button onClick={IncreamentCount}>Add Value</button>
                <br />
                <br />
            <button onClick={DecreamentCount}>Remove Value</button>
    </div>
  )
}

export default Counter;
