export default function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.imagem} />
            <div class="texto">
                Curtido por <strong>{props.usuario_que_curtiu}</strong> e <strong>outras {props.qtd_pessoas} pessoas</strong>
            </div>
        </div>
    )
}