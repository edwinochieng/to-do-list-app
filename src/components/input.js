import React, { useState } from "react";

function Input(props){

    const [input, setInput] = useState("")

    const handleChange = (event) =>{

        setInput(event.target.value);
    }

    return(
        <div>
            <form>
                <input className="h-8 w-56 border border-cyan-300 focus:outline-none rounded-md bg-teal-100 text-neutral-900 text-center font-semibold text-lg"
                onChange={handleChange} type = "text" value = {input}/>
                <button
                className="ml-1 py-1 px-4 border-solid border border-cyan-300 font-bold rounded-md"
                 onClick={() => {
                    props.onAdd(input)
                    setInput("")
                 }}
                 >Add</button>
            </form>
        </div>
    )
}

export default Input;