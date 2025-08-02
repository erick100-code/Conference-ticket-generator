import {createContext, useEffect, useState } from "react";


export const Contexto = createContext()

export const Contextprovider = ({children}) => {
    
    const [data, setData] = useState("")
    const [twoimg, setTwo] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {// quando renderiar o componente pela primeira vez pega os valores do localStorage
        const inpv = localStorage.getItem('inputsvalues')
        const imgsrc = localStorage.getItem('imgsrc')
        const inpvaluesf = JSON.parse(inpv)
        const imgsrcfinal = JSON.parse(imgsrc)
        
        setTwo(imgsrcfinal)
        setData(inpvaluesf)
    },[])

    function alterar(novoData) {
        setData(novoData)
        localStorage.setItem('inputsvalues', JSON.stringify(novoData))
    }

    function alterarimg(value) {
        setTwo(value)
        setImage(value)
        localStorage.setItem('imgsrc', JSON.stringify(value))
    }

 
    return (
        <Contexto.Provider value={ {data, alterar, image, alterarimg, twoimg} }>
            {children}
        </Contexto.Provider>
    )

}