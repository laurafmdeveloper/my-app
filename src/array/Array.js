export default function array(){
    const data = [1,2,3,4,5,6]
     // solo map en react, no sirve for each
    return <>
               
             { data.map(v=>(<div key={v}>{v}</div> )) }
           </>
}