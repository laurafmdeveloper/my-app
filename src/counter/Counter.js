import { useState } from "react"

export default function Counter() {
    /**
     * 
   
    let count = 10;

	function handlerClick() {
		count += 2;
	}
 
    const {count, setCount}= useState(10)
    function handlerClick(){
        setCount(count +2)
    }
     */
    //onClick="handlerClick()"
    const {count}= useState(10)
    return <button > count: {count}</button>


}
