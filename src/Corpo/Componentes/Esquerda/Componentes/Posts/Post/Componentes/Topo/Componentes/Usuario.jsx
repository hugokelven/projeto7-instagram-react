export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} />
            {props.usuario}
        </div>
    )
}