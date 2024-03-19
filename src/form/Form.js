import { useRef } from "react"
import Input from "./Input"


export default function Form(){
    const name =useRef()
    const phone = useRef()

    const data = {
        name: name.value.current,
        phone: phone.current.value
    }

    console.log(data)
   

    function handlerSubmit(ev){
        ev.preventDefault();
    }

    // uesRef enlaza los value con react

    /**
     * 
     <> 
    <Form/>
     <p>fetch--:</p>
      <Fetch/>
      <Parent/>
      <Timer/>
      <Counter/>
      <User/>
      <Calendar/>
      <Array/>
      <div>Hello {name}</div>
    </> 
    // no puedo h avver desestructuring de ref
     */


    return(<form>
            <Input id="name" text="introduzca el nombre" ref={name} />
            <Input id="phone" text="introduzca el nombre" ref={phone} />

         
            <button type="submit" onSubmit={handlerSubmit}>Enviar datos</button>
        </form>)
}