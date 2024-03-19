import useFetch from "./useFetch";

function eventCarrito(pizza){
    const event = new CustomEvent("Carrito", {
        detail: [...pizza], 
        // así no es una referencia al original
        // clone si es copia en profundidad
        composed: true,
        bubbles: true
    })
    //event.detail = pizza
    //event.composed = true


    return event

}
export default function Fetch(url, initialValue) {
    const {loading, error, data} = useFetch("http://localhost:3000/pizzas", 0)

    /** 
    if(error){
        return <div>{error}</div> 
    }
    
    if (loading) {
        return <div>Loading...</div>
    }


   // CONSOLE 
    
    // const response = await useFetch("http://localhost:3000/pizzas")
    // const data = await response.json()


    // OJO a un fragment <> no puedo subscribirme nunca, lo cambio a div
    // <>
    function handlerClick(ev){
        ev.stopPropagation();
        
        // error    .find(n => n.dataset && id in n.dataset)
        const node = ev.nativeEvent.composePath()
        .find(n => n.dataset && 0 in n.dataset)

        if(node) {
            const {id} =node.dataset;
            const pizza= node.find(p => p.id == id)
            // cortocircuito para seguridad
            pizza && node.dispatchEvent()
         }
    }



    return <>
                { data.map(({id, name, price}) => {
                    //data map is not a function
                        return(<div onClick={handlerClick} key={id}>
                                <div>{id}</div>
                                <div>{name}</div>
                                <div>{price}</div>

                                <button data-id={id}>COMPRAR</button>
                            </div>)
                })}
          </>
    */

    return ""
}
