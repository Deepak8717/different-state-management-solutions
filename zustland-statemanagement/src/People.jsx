import useStore from "./store";

const People =()=>{
    const people = useStore((state)=>state.people);
    return(
        <div>
            We have {people.length} People inside the store
            <ul>
                {people.map((person, index)=>{
                    return <li key={index}>{person}</li>
                })}
            </ul>
        </div>
    )
}

export default People