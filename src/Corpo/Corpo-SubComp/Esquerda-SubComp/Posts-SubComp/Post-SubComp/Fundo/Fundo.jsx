import AcoesFundo from "./AcoesFundo"
import Curtidas from "./Curtidas"

export default function Fundo(props) {
    return (
        <div class="fundo">
            <AcoesFundo />
            <Curtidas imagem={props.topo.curtidas.imagem} usuario_que_curtiu={props.topo.curtidas.nome} qtd_pessoas={props.topo.curtidas.qtd_pessoas} />
        </div>
    )
}