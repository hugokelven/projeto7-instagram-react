import Esquerda from "./Componentes/Esquerda/Esquerda"
import SideBar from "./Componentes/SideBar/SideBar"

export default function Corpo() {
    return(
      <div class="corpo">
        <Esquerda/>
        <SideBar/>
      </div>
    )
}