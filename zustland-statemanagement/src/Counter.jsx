import React from 'react'
import useStore from './store'

const Counter = () => {
    const increment = useStore((state)=>state.increment)
    const increase = useStore((state)=>state.increase)
  return (
    <div>
      <h3>{increment}</h3>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter
