import React, { useEffect } from 'react'
import { useState } from 'react'

export const UseEffectDemo = () => {
     const [count, setcount] = useState(0)

     useEffect(()=>{
        console.log("use effect called..")
     },[count])
  return (
    <div style={{textAlign:'center'}}>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}
