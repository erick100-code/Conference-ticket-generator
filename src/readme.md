<!-- CODE PARA ADICIONAR OS DADOS AO DROPAR O ARQUVO
    
function App() {

  const caixaDRAG = useId()
  const inp = useId()
  const image = useRef()

  function add(file) {
    
    if (file && file.type.startsWith("image/jpeg")) {
      const reader = new FileReader()// cria uma nova leitura de arquivo

      reader.onload = (arquivoLido) => {
        image.current.src = arquivoLido.target.result
        image.current.classList.replace('hidden', 'block')
      } 

      reader.readAsDataURL(file)
    } else {
      window.alert("selecione uma imagem como arquivo")
    }

  }

  return (

    <div>
      <div id={caixaDRAG} 
        onDragOver={(event) => {
          event.target.classList.add('bg-gray-700')
          event.preventDefault() 
        }} 
        
        onDragLeave={(event) => event.target.classList.remove('bg-gray-700')}
        className='bg-gray-500 w-[300px] h-[200px]'
      
        onDrop={(event) => {
          event.target.classList.remove('bg-gray-700')
          add(event.dataTransfer.files[0])
          event.preventDefault()
        }}
      >
        <input type="file" name="inp" id={inp} className='hidden'/>
        <img ref={image} src="#" alt="imagem do arquivo" className='hidden h-full w-full object-cover'/>
      </div>
      
    </div>

  )
}
-->


<!-- CODIGO PARA ADICIONAR UMA IMAGEM POR MEIO DO INPUT 

    const inp = useRef()
    const image = useRef()
    const bot = useRef()

    function read(result) { 
        const arquivo = result// pega o resultado do input = (arquivo)
    
        if (arquivo) {// se o arquivo for encontrado
            const reader = new FileReader()// cria leitor de arquivo

                reader.onload = function (e) {// define o que vai fazer quando terminar de ler

                image.current.src = e.target.result// adiciona o arquivo a imagem
            
                image.current.classList.replace('hidden', 'block')
            }
        }

        reader.readAsDataURL(arquivo)// inicia a leitura e quando terminar executa a função acima
    } 

    const dispara = () => {
        inp.current.click()
    }

-->




<!-- 
    <button ref={bot} onClick={dispara}>selecionar arquivo</button>

    input ref={inp} type="file" name="test" id="test" onChange={(event) => read(event.target.files[0])} className='hidden' />

    <img ref={image} src="#" alt="arquivo" className='hidden w-[50px] h-[50px] rounded-full object-cover'/>   
-->