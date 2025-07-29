import {} from 'react'
import './App.css'
import { Link } from 'react-router-dom'

// vamos precisar passar os dados por meio da URL com searchParams 
// a primeira pagina vai ter o formulario a segunda o ticket siga as instruções acima!
function App() {
  return (
    <div>
      <h1>rota padrão</h1>
      <Link to={"/twopage"}>ir para segunda pagina</Link>
    </div>
  )
}

export default App
