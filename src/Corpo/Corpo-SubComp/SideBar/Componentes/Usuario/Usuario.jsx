import Imagem from "./Componentes/Imagem"
import Texto from "./Componentes/Texto"

const usuario = {
    imagem: "assets/img/catanacomics.svg",
    texto: { nome: "catanacomics", apelido: "Catana" }
}


export default function Usuario() {
    return (
        <div class="usuario">
            <Imagem imagem={usuario.imagem} />
            <Texto nome={usuario.texto.nome} apelido={usuario.texto.apelido} />
        </div>
    )
}