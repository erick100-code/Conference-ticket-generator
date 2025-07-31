import { useContext } from "react"
import { Contexto, Contextprovider } from "../context/context"

const Tick = () => {
    
    const {image, data} = useContext(Contexto)

    return (
   
            <div>
                <img src={image} alt="não foi possivel carregar" />
                <h1>name: {data.name} </h1> 
                <h1>email: {data.email} </h1> 
                <h1>git: {data.git} </h1> 
            </div>

    )
}

export default Tick