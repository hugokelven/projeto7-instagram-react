import Story from "./Stories-SubComp/Story"
import Setinha from "./Stories-SubComp/Setinha"

export default function Stories() {
  const usuarios = [
    {link: "assets/img/9gag.svg", nome: "9gag"},
    {link: "assets/img/meowed.svg", nome: "meowed"},
    {link: "assets/img/barked.svg", nome: "barked"},
    {link: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet"},
    {link: "assets/img/wawawicomics.svg", nome: "wawawicomics"},
    {link: "assets/img/respondeai.svg", nome: "respondeai"},
    {link: "assets/img/filomoderna.svg", nome: "filomoderna"},
    {link: "assets/img/memeriagourmet.svg", nome: "memeriagourmet"}
  ]

  return (
    <div class="stories">
      {usuarios.map(usuario => <Story imagem={usuario.link} usuario={usuario.nome} /> )}
      <Setinha />
    </div>
  )
}