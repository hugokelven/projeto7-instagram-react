import Topo from "./Componentes/Topo/Topo"
import Conteudo from "./Componentes/Conteudo"
import Fundo from "./Componentes/Fundo/Fundo"

export default function Post(props) {
    return (
        <div class="post">
            <Topo topo={props.post} />
            <Conteudo imagem={props.post.conteudo} />
            <Fundo topo={props.post} />
        </div>
    )
}