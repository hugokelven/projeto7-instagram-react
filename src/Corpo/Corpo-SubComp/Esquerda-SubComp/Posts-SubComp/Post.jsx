import Topo from "./Post-SubComp/Topo/Topo"
import Conteudo from "./Post-SubComp/Conteudo"
import Fundo from "./Post-SubComp/Fundo/Fundo"

export default function Post(props) {
    return (
        <div class="post">
            <Topo topo={props.post} />
            <Conteudo imagem={props.post.conteudo} />
            <Fundo topo={props.post} />
        </div>
    )
}