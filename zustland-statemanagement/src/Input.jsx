import useStore from "./store";

import React from 'react'
import { useRef } from "react";

const Input = () => {
    const addPerson = useStore((state)=>state.addPerson);
    const inputRef = useRef()
    const add=(e)=>{
        e.preventDefault()
        addPerson(inputRef.current.value);
        inputRef.current.value="";
    }
  return (
    <div>
      <form onSubmit={(e)=>add(e)}>
        <input ref={inputRef} />
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default Input
