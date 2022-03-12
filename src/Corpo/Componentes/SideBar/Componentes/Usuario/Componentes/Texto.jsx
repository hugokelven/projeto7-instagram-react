export default function Texto(props) {
    return (
        <div class="texto">
            <strong>{props.nome}</strong>
            {props.apelido}
        </div>
    )
}