import { useEffect, useRef } from "react"
import Caixastext from "./components/caixastext"
import Files from "./components/files"


const App = () => {

    const base = import.meta.env.BASE_URL;


    const imgf = useRef()

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            imgf.current.setAttribute('src',`${base}/images/pattern-squiggly-line-bottom-desktop.svg`)
            
        }
    }, [])


    return (
    <div className=' w-screen min-h-screen overflow-x-hidden bg-cover bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url(${base}images/background-mobile.png)` }}>
            <section className='text-white flex flex-col items-center gap-[30px_0px] p-5 pt-10 pb-28 relative'>
                <div className='bg-cover bg-no-repeat  w-screen h-[1010px] bg-center absolute z-0 top-0 left-0' style={{ backgroundImage: `${base}images/pattern-lines.svg` }}></div>
        
                <div className='absolute w-[150px] h-[150px] top-[-40px] left-[-30px] lg:w-[200px] lg:h-[200px] lg:left-[50px]'>
                <img src={`${base}images/pattern-circle.svg`} alt="circulo"  className='object-cover'/>
                </div>
            
                <div className='absolute w-[150px] h-[150px] top-[640px] right-[-80px] lg:right-[130px] lg:top-[550px] lg:w-[200px] lg:h-[200px]'>
                <img src={`${base}images/pattern-circle.svg`} alt="circulo"  className='object-cover'/>
                </div>
            
                <div className='w-[140px] h-[140px] lg:h-[400px] lg:w-[400px] absolute top-7 right-0'>
                <img src={`${base}images/pattern-squiggly-line-top.svg`} alt="falha ao carregar imagem" className='object-cover' />
                </div>
            
                <div className='w-[400px] absolute bottom-[-50px] left-0 z-0 lg:w-[800px] lg:bottom-0'> 
                <img ref={imgf} src={`${base}images/pattern-squiggly-line-bottom-mobile-tablet.svg`} alt="falha ao carregar imagem"  className='object-cover'/>
                </div>
        
                <img src={`${base}images/logo-full.svg`} alt="logo da imagem" className='w-[200px] h-auto object-cover mb-6' />
            
                <h1 className='text-center text-3xl font-extrabold capitalize lg:text-5xl lg:max-w-[750px]'>your journey to coding conf 2025 starts here!</h1>

                <p className='text-[#ffffffb9] text-center text-[18px] w-[300px] mb-5 lg:w-[1000px]'>
                secure your spot at next years's biggest coding conference.
                </p>
                <div className="lg:max-w-[700px] space-y-12">
                    <Files />
                    <Caixastext />
                </div>
            </section>
        </div>
        
    )
}

export default App