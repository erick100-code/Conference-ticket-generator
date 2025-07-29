import {} from 'react'
import './App.css'
import Files from './components/files'

// vamos precisar passar os dados por meio da URL com searchParams 
// a primeira pagina vai ter o formulario a segunda o ticket siga as instruções acima!
function App() {

  return (
    <div className='bg-[url("/images/background-mobile.png")] bg-cover bg-bottom-right w-screen h-screen'>
      <section className='text-white flex flex-col items-center p-5'>
        <img src="/images/logo-full.svg" alt="logo da imagem" className='w-[200px] h-auto object-cover' />
        <p className='text-center text-[18px] w-[300px]'>
        <h1 className='text-center text-3xl font-extrabold capitalize'>your journey to coding conf 2025 starts here!</h1>
          secure your spot at next years's biggest coding conference.
        </p>
        <Files />
      </section>
    </div>
  )
}

export default App
