export default function calendar(){

  function getDays(){
     const cal = new Array(31);
   // [1,2,3,4,5,6,7,8]
   cal.fill(1,1,31)
    return cal

  }
  function handlerClick(ev){
    console.log(ev.target)
  
  }
 
    const days = [...getDays()]
    // generador
      // { cal.map(v=>(<div key={v}>{v}</div> )) }
    return(   <div className="calendar">
              {days.map(day =>  <div className="day" key={day}>{day}</div>) } 
              
            </div>
           )
}

