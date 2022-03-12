import Usuario from "./Componentes/Usuario/Usuario"
import Sugestoes from "./Componentes/Sugestoes/Sugestoes"
import Links from "./Componentes/Links"
import Copyright from "./Componentes/Copyright"

export default function SideBar() {
  return(
    <div class="sidebar">
      <Usuario/>
      <Sugestoes/>
      <Links/>
      <Copyright/>
    </div>
  )
}