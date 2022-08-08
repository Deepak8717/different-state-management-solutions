import useStore from "./useStore";
import Dragon from "./Dragon";

import React from 'react'


const MyPets = () => {
const dog = useStore((state)=>state.dog);
const cat = useStore((state)=>state.cat); 
const addDog = useStore((state)=>state.addDog);
const addCat = useStore((state)=>state.addCat)
  return (
    <div>
        I have {dog} dogs and {cat} cats
        <div>
            <button onClick={addDog}>Add Dog</button>
            <button onClick={addCat}>Add Cat</button>
        </div>
        <br/>
        <Dragon/>
    </div>
  )
}
export default MyPets