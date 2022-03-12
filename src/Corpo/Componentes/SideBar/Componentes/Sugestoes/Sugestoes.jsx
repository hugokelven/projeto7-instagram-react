import Titulo from "./Componentes/Titulo"
import Sugestao from "./Componentes/Sugestao/Sugestao"

const sugestoes = [
  {
    imagem: "assets/img/bad.vibes.memes.svg",
    texto: { nome: "bad.vibes.memes", razao: "Segue você" }
  },

  {
    imagem: "assets/img/chibirdart.svg",
    texto: { nome: "chibirdart", razao: "Segue você" }
  },

  {
    imagem: "assets/img/razoesparaacreditar.svg",
    texto: { nome: "razoesparaacreditar", razao: "Novo no Instagram" }
  },

  {
    imagem: "assets/img/adorable_animals.svg",
    texto: { nome: "adorable_animals", razao: "Segue você" }
  },

  {
    imagem: "assets/img/smallcutecats.svg",
    texto: { nome: "smallcutecats", razao: "Segue você" }
  }
]

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <Titulo />
      {sugestoes.map(sugestao => <Sugestao sugestao={sugestao} />)}
    </div>
  )
}