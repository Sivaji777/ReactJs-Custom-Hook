import React from 'react'
import useCounter from './CustomHook'

function Mainhook() {

    const data=useCounter()

  return (
    <div>
    <h2>{data.increment}</h2>
    <button onClick={data.handleIncrement} >click</button>
    
    </div>
  )
}

export default Mainhook