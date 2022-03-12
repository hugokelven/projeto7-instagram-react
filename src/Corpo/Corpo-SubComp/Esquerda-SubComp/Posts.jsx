import Post from "./Posts-SubComp/Post"

const posts = [
  {
    usuario: { imagem: "assets/img/meowed.svg", nome: "meowed" },
    conteudo: "assets/img/gato-telefone.svg",
    curtidas: { imagem: "assets/img/respondeai.svg", nome: "respondeai", qtd_pessoas: "101.523" }
  },

  {
    usuario: { imagem: "assets/img/barked.svg", nome: "barked" },
    conteudo: "assets/img/dog.svg",
    curtidas: { imagem: "assets/img/adorable_animals.svg", nome: "respondeai", qtd_pessoas: "99.159" }
  }
]

export default function Posts() {
  return (
    <div class="posts">

      {posts.map(post => <Post post={post} />)}

    </div>
  )
}