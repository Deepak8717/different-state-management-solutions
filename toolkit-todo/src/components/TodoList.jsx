import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos } from '../redux/todo'

export default function TodoList() {
    const {todos} = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    console.log(todos)
  return (
    <div>
      {todos.map((item)=>{
        return (<div key={item.id} style={{width:"350px", margin:"5px auto", padding:"5px", borderBottom:"1px solid"}}>
         
          <span>{item.todo}</span>
           <span style={{background:"lightgray", padding:"2px 5px", margin:"2px 15px", borderRadius:"10px"}}
           onClick={()=>dispatch(deleteTodos(item))}
           >X</span>
          </div>)
      })}
    </div>
  )
}
