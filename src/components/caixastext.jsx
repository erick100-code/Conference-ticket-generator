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
    const span1 = useRef()
    const span2 = useRef()

    const navegar = useNavigate()
    const {alterar, image} = useContext(Contexto)
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function envio() {
  if (form.current.checkValidity()) {
    if (!gitINP.current.value.startsWith('@')) {
        span2.current.classList.replace('hidden', 'block')
        gitINP.current.focus()
        return
    }

    if (
        emaiINP.current.value === '' ||
        !regexEmail.test(emaiINP.current.value)
    ) {
        span1.current.classList.replace('hidden', 'block')
        span2.current.classList.replace('block', 'hidden')
        return
    }

    if (image.length === 0) {
        span1.current.classList.replace('block', 'hidden')
        window.alert('selecione uma de suas fotos')
        return
    }

    if (image[0].size > 512000) {
        window.alert('a imagem é muito grande')
        return
    }

    //  Tudo válido, agora pode alterar e navegar
    alterar({
      name: nameINP.current.value,
      email: emaiINP.current.value,
      git: gitINP.current.value,
    })

    navegar('ticket/')
  } else {
    window.alert('preencha todos os campos requisitados')
  }
}



    return (
        <form ref={form} onSubmit={(event) => {
            event.preventDefault()
            envio()
        }} action={"#"} className="self-start flex flex-col gap-[40px_0px] w-full z-10">
            <button className="flex flex-col gap-[10px_0px] z-10 text-left" onClick={(event) => event.preventDefault()}>
                <label htmlFor={name} className="capitalize text-[20px]">full name</label>
                <Inputs ref={nameINP}  id={name} type={"text"} required />
            </button>
            
            <button className="flex flex-col gap-[10px_0px] z-10 text-left" onClick={(event) => event.preventDefault()}>
                <label htmlFor={email} className="capitalize text-[20px]">email addreress</label>
                <Inputs ref={emaiINP} id={email} type={"email"} placeholder={"example@email.com"} />
                <span ref={span1} className="text-[#ff00009a] hidden">por favor digite um email valido</span>
            </button>
            
            <div className="flex flex-col gap-[10px_0px] z-10 text-left" onClick={(event) => event.preventDefault()}>              
                <label htmlFor={github} className="capitalize text-[20px]">gitHub username</label>
                <Inputs ref={gitINP} id={github} type={"text"} required placeholder={"@yourusername"} />
                <span ref={span2} className="text-[#ff00009a] hidden">o nome deve começar com um <strong>@</strong></span>
            </div>

            <button type="submit" className="bg-[#f57261] text-[#0c082b] rounded-2xl text-2xl font-extrabold capitalize p-4 cursor-pointer z-10">generate my ticket</button>
        </form>  
    )
}

export default Caixastext