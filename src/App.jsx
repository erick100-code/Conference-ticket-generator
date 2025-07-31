import Caixastext from "./components/caixastext"
import Files from "./components/files"


const Homee = () => {
    return (
        <div className='overflow-y-hidden  w-screen min-h-screen overflow-x-hidden'>
            <section className='text-white flex flex-col items-center gap-[30px_0px] p-5 pt-10 pb-28 relative'>
                <div className='bg-[url("/images/pattern-lines.svg")] bg-cover bg-no-repeat  w-screen h-[1010px] bg-center absolute z-0 top-0 left-0'></div>
        
                <div className='absolute w-[150px] h-[150px] top-[-40px] left-[-30px]'>
                <img src="/images/pattern-circle.svg" alt="circulo"  className='object-cover'/>
                </div>
            
                <div className='absolute w-[150px] h-[150px] top-[640px] right-[-80px]'>
                <img src="/images/pattern-circle.svg" alt="circulo"  className='object-cover'/>
                </div>
            
                <div className='w-[140px] h-[140px] absolute top-7 right-0'>
                <img src="/images/pattern-squiggly-line-top.svg" alt="falha ao carregar imagem" className='object-cover' />
                </div>
            
                <div className='w-[400px] absolute bottom-[-50px] left-0 z-0'>
                <img src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="falha ao carregar imagem"  className='object-cover'/>
                </div>
        
                <img src="/images/logo-full.svg" alt="logo da imagem" className='w-[200px] h-auto object-cover mb-6' />
            
                <h1 className='text-center text-3xl font-extrabold capitalize'>your journey to coding conf 2025 starts here!</h1>
                <p className='text-center text-[18px] w-[300px] mb-5'>
                secure your spot at next years's biggest coding conference.
                </p>
                <Files />
                <Caixastext />
            </section>
        </div>
        
    )
}

export default Homee