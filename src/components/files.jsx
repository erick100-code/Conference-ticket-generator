
import { CircleAlertIcon } from "lucide-react"
import { useContext, useId, useRef } from "react"
import Bot from "./bot"
import { Contexto } from "../context/context"


const Files = () => {
    const inp = useRef()
    const img = useRef()
    const lab = useRef()
    const bots = useRef()

    const inpID = useId()

    const {alterarimg} = useContext(Contexto)

    const readFile = (file) => {
        if (file) {
            const novaLeitura = new FileReader()
    
            novaLeitura.onload = (event) => {
                img.current.src = event.target.result
                bots.current.classList.replace('hidden', 'flex')
                lab.current.classList.replace('flex', 'hidden')
                alterarimg(event.target.result)
            }
            
            novaLeitura.readAsDataURL(file)
        }
        
    }
    
    const add = (file) => {
        if (file) {
            let newleitura = new FileReader()
            
            newleitura.onload = (event) => {
                img.current.src = event.target.result
                bots.current.classList.replace('hidden', 'flex')
                lab.current.classList.replace('flex', 'hidden')
                
                alterarimg(event.target.result)
            }
            
            newleitura.readAsDataURL(file)
        }
    }

    function ck() {
        inp.current.click()
    }

    return (
        <div className="w-full z-10">
            <div className="flex flex-col items-center gap-[10px_0px]">
                <span className="text-left capitalize font-semibold text-[20px] w-full">upload avatar</span>
                <button className="rounded-[10px]">
                    <div
                        className="rounded-[10px] border-dashed border-[#ffffff88] border-2 bg-[#ffffff41] w-[90vw] h-[160px] flex justify-center flex-col items-center text-center gap-[20px_0px] lg:max-w-[700px] z-10"
                    
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) =>{
                            add(event.dataTransfer.files[0])
                            event.preventDefault()
                        } }
                    >
                        <input ref={inp} type="file" name="file" id={inpID} onChange={(event) => readFile(event.target.files[0])} className="hidden"/>
                        <div className="bg-[#ffffff28] border-[#e32afb5d] border rounded-2xl">
                            <img ref={img} src="/images/icon-upload.svg" alt="image upload" className="rounded-2xl w-[60px] h-[60px] object-cover" />
                        </div>
                        <label ref={lab} htmlFor={inpID} className="flex flex-col justify-center items-center gap-[15px_0px] z-10">
                            <span className="text-[20px] cursor-pointer">Drag and drop or click to upload</span>
                        </label>
                    
                        <div ref={bots} className="gap-[0px_15px] hidden z-10">
                            <Bot onClick={() => {
                                img.current.src = "/images/icon-upload.svg"
                                bots.current.classList.add('hidden')
                                lab.current.classList.replace('hidden', 'flex')
                                alterarimg("")
                            }}><u className="underline decoration-2">Remove image</u></Bot>
                            <Bot onClick={() => ck()}>Change image</Bot>
                        </div>
                    </div>
                </button>
                <p className="text-left text-[13px] text-[#ffffffde] self-start flex items-center gap-[0px_8px]">
                    <CircleAlertIcon className="size-[18px]"/> 
                    <span>upload your photo (jPG or PNG, max size: 500KB)</span>
                </p>
            </div>
        </div>
    )
}

export default Files