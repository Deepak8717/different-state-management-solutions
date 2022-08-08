import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) =>({
    dog:0,
    cat:0,
    dragon:0,
    pets:0,
    addDog:()=>set((state)=>({dog:state.dog+1, pets:state.pets+1})),
    addCat:()=>set((state)=>({cat:state.cat+1, pets:state.pets+1})),
    addDragon:()=>set((state)=>({Dragon:state.dragon+1, pets:state.pets+1}))
})

store = devtools(store);
store = persist(store);

const useStore = create(store); 

export default useStore;