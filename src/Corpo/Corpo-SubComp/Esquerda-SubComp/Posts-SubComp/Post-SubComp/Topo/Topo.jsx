import AcoesTopo from "./AcoesTopo"
import Usuario from "./Usuario"

export default function Topo(props) {
    return (
        <div class="topo">
            <Usuario imagem={props.topo.usuario.imagem} usuario={props.topo.usuario.nome} />
            <AcoesTopo />
        </div>
    )
}