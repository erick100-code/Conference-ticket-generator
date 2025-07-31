import { useContext, useId, useRef } from "react"
import Inputs from "./inputs"
import { Contexto } from "../context/context"
import { useNavigate } from "react-router-dom"

const Caixastext = () => {  
    const name = useId()
    const email = useId()
    const github = useId()
    const form = useRef()
    const nameINP = useRef()
    const emaiINP = useRef()
    const gitINP = useRef()
    
    const navegar = useNavigate()
    const {alterar, image} = useContext(Contexto)
    
    


    function envio() {
        if ( form.current.checkValidity()) {
            if (image.length != 0) {
                alterar({
                    name: nameINP.current.value,
                    email: emaiINP.current.value,
                    git: gitINP.current.value
                })
                navegar('ticket/')
            } else {
                window.alert("selecione uma de suas fotos")
            }
        } else {
            window.alert("preencha todos os campos requisitados")
        }
    }

    return (
        <form ref={form} onSubmit={(event) => {
            event.preventDefault()
            envio()
        }} action={"#"} className="self-start flex flex-col gap-[40px_0px] w-full z-10">
            <div className="flex flex-col gap-[10px_0px]">
                <label htmlFor={name} className="capitalize text-[20px]">full name</label>
                <Inputs ref={nameINP}  id={name} type={"text"} required />
            </div>
            
            <div className="flex flex-col gap-[10px_0px]">
                <label htmlFor={email} className="capitalize text-[20px]">email addreress</label>
                <Inputs ref={emaiINP} id={email} type={"email"} required placeholder={"example@email.com"} />
            </div>
            
            <div className="flex flex-col gap-[10px_0px]">              
                <label htmlFor={github} className="capitalize text-[20px]">gitHub username</label>
                <Inputs ref={gitINP} id={github} type={"text"} required placeholder={"@yourusername"} />
            </div>

            <button type="submit" className="bg-[#f57261] text-[#0c082b] rounded-2xl text-2xl font-extrabold capitalize p-4 cursor-pointer">generate my ticket</button>
        </form>  
    )
}

export default Caixastext