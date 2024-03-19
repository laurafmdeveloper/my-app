// const handler = setInterval(()=>console.log(new Date(), 1000))
import { useState } from "react"

export default function Timer() {
    const {time, setTime}= useState(new Date()) 
     
    const handler = setInterval(()=>setTime(time), 1000)
    
    return <div > timer: {time}</div>


}
