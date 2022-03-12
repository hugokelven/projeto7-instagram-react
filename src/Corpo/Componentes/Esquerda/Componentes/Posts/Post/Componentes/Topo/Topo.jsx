import AcoesTopo from "./Componentes/AcoesTopo"
import Usuario from "./Componentes/Usuario"

export default function Topo(props) {
    return (
        <div class="topo">
            <Usuario imagem={props.topo.usuario.imagem} usuario={props.topo.usuario.nome} />
            <AcoesTopo />
        </div>
    )
}