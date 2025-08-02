import { useContext } from "react"
import { Contexto, Contextprovider } from "../context/context"

const Tick = () => {
    
    const copy = async () => {
       try {
           await navigator.clipboard.writeText('01609')
       } catch (error) {
            console.log(`erro ao salvar o texto. ERROR: [${error}]`)
       }
    }

    const base = import.meta.env.BASE_URL;


    const {data, twoimg} = useContext(Contexto)

    return (
        <div className="min-h-screen w-full flex flex-col bg-[url('${base}/images/background-mobile.png')] bg-cover bg-no-repeat bg-right-bottom relative">
            <div className="overflow-hidden w-full h-full absolute">
                <div className='bg-[url("${base}/")] bg-cover bg-no-repeat  w-screen h-[900px] bg-center absolute z-0 top-0 left-0' style={{backgroundImage: `${base}/images/pattern-lines.svg`}}></div>
                
                <div className='absolute w-[150px] h-[150px] top-[-40px] left-[-30px]'>
                    <img src={`${base}/images/pattern-circle.svg`} alt="circulo"  className='object-cover'/>
                </div>
                <div className='absolute w-[150px] h-[150px] top-[640px] right-[-80px]'>
                    <img src={`${base}/images/pattern-circle.svg`} alt="circulo"  className='object-cover'/>
                </div>
                <div className='w-[140px] h-[140px] absolute top-7 right-0'>
                    <img src={`${base}/images/pattern-squiggly-line-top.svg`} alt="falha ao carregar imagem" className='object-cover' />
                </div>
                <div className='w-[300px] h-auto absolute bottom-[0px] left-0 z-0'>
                    <img src={`${base}/images/pattern-squiggly-line-bottom-mobile-tablet.svg`} alt="falha ao carregar imagem"  className='object-cover'/>
                </div>
            </div>
                
            <div className="text-center z-10 h-full w-full text-white flex flex-col items-center pt-10 px-4 gap-[30px_0px]">
                <div><img src="Conference-ticket-generator/images/logo-full.svg" alt="logo"  /></div>
                <h1 className="text-[32px] text-[white] lg:text-5xl lg:max-w-[660px]">Congrats, <strong className="linename">{data.name}</strong> Your ticket is ready.</h1>
                <p className="text-[#ffffffd2] text-[20px] w-[90%] lg:w-[40%]">
                    We've emailed your ticket to <strong className="text-[#f37362] font-normal">{data.email}</strong> and will send updates in the run up to the event.
                </p>
                <div className="relative landscape:pb-7 mt-20">
                    <img src="${base}/images/pattern-ticket.svg" alt="" className="lg:h-[250px]"/>
                    <div className="absolute top-[20px] left-[20px] flex flex-col gap-[40px_0px] landscape:gap-[120px_0px] lg:landscape:gap-[80px]">
                        <div className="flex gap-[0px_20px]">
                            <img src="${base}/images/logo-mark.svg" alt="" />
                            <div className="">
                                <h1 className="text-2xl capitalize text-left font-bold">coding conf</h1>
                                <p>
                                    jan 31, 2025 / Austin, Tx
                                </p>
                            </div>
                        </div>
                        <div className=" flex gap-[0px_10px] text-left">
                            <img src={twoimg} alt="falha ao carregar a imagem"  className="object-cover w-[50px] h-[50px] rounded-[10px]"/>
                            <div>
                                <h2 className="text-2xl font-semibold truncate max-w-[370px] portrait:max-w-[245px]">{data.name}</h2>
                                <p className="flex gap-[0px_5px] truncate max-w-[370px] portrait:max-w-[230px]"><span><img src="${base}/images/icon-github.svg" alt="" /></span>{data.git}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-[-15px] top-[70px] landscape:top-[120px] transform-[rotate(90deg)] z-20">
                        <p className="text-[#ffffff63] text-3xl cursor-pointer" onClick={copy}>#01609</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tick