import create from "zustand"
import {devtools} from "zustand/middleware"

let store = (set)=>({
    people:["Daniel", "Connie", "mcDowel"],
    addPerson:(newperson)=>{
        set((state)=>({people: [...state.people, newperson]}))
    },
    increment:0,
    increase:()=>set((state)=>({increment:state.increment+1}))
})

store = devtools(store);

const useStore= create(store);

export default useStore;