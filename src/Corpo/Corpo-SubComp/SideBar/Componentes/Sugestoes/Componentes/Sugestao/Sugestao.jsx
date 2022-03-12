import Usuario from "./Componentes/Usuario"
import Seguir from "./Componentes/Seguir"

export default function (props) {
    return (
        <div class="sugestao">
            <Usuario usuario={props.sugestao}/>
            <Seguir />
        </div>
    )
}