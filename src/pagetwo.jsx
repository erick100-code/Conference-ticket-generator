import { Link } from "react-router-dom"

function Twopage() {
    return (
        <div>
            <h1>pagina 2</h1>
            <Link to={"/"}>voltar para paginar anterior</Link>
        </div>
    )
}

export default Twopage