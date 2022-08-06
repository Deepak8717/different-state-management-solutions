import {useDispatch, useSelector} from "react-redux"
import { addTodos } from "../redux/todo"

import React from 'react'
import { useState } from "react";

export default function AddTodos() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("")
  return (
    <div>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={()=>{
          dispatch(addTodos(todo));
          setTodo("")
        }}>Add todo</button>
    </div>
  )
}
