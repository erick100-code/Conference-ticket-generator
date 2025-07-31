import {createContext, useState } from "react";


export const Contexto = createContext()

export const Contextprovider = ({children}) => {
    
    const [data, setData] = useState("")
    const [image, setImage] = useState('') 



    function alterar(novoData) {
        setData(novoData)
        localStorage.setItem('inputsvalues', JSON.stringify(novoData))
    }

    function alterarimg(value) {
        setImage(value)
    }

 
    return (
        <Contexto.Provider value={ {data, alterar, image, alterarimg} }>
            {children}
        </Contexto.Provider>
    )

}