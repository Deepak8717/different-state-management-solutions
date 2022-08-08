import React from 'react' 
import useStore from './useStore'

const Dragon = () => {
    const dragon = useStore((state)=>state.dragon)
    const pets = useStore((state)=>state.pets);
    const addDragon = useStore((state)=>state.addDragon)
  return (
    <div>
      also i have {dragon} dragon, so total {pets} pets
      <div>
        <button onClick={addDragon}>Add Dragon</button>
      </div>
    </div>
  )
}

export default Dragon
