export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.usuario.imagem} />
            <div class="texto">
                <div class="nome">{props.usuario.texto.nome}</div>
                <div class="razao">{props.usuario.texto.razao}</div>
            </div>
        </div>
    )
}