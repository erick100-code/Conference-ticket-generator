import { useId, useRef } from "react"

const Files = () => {
    const inp = useRef()
    const img = useRef()

    const inpID = useId()

    const readFile = (file) => {
        if (file) {
            const novaLeitura = new FileReader()
    
            novaLeitura.onload = (event) => {
                img.current.src = event.target.result
            }

            novaLeitura.readAsDataURL(file)
        }
    
    }

    return (
        <div className="w-full">
            <div className="flex flex-col items-center">
                <span className="text-left capitalize w-full">opload avatar</span>
                <div className="rounded-[10px] border-dashed border-[#ffffff88] border-2 bg-[#ffffff41] w-[90vw] h-[150px] flex justify-center items-center text-center">
                    <input ref={inp} type="file" name="file" id={inpID} onChange={(event) => readFile(event.target.files[0])} className="hidden"/>

                    <label htmlFor={inpID} className="flex flex-col justify-center items-center gap-[15px_0px]">
                        <div className="bg-[#ffffff28] border-[#e32afb5d] border rounded-2xl">
                            <img ref={img} src="/images/icon-upload.svg" alt="image upload" className="rounded-2xl w-[60px] h-[60px] object-cover" />
                        </div>
                        
                        <span>Drag and drop or click to upload</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Files