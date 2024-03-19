import { forwardRef } from "react"
import React from "react"

function Input({id, text, ref}){

    
    return(
        <div>
            <label htmlFor={id}>{text}</label>
            <input id={id}></input>
        </div> )
}
export default React.forwardRef(Input)