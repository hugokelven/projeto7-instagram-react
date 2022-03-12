import Esquerda from "./Corpo-SubComp/Esquerda"
import SideBar from "./Corpo-SubComp/SideBar/SideBar"

export default function Corpo() {
    return(
      <div class="corpo">
        <Esquerda/>
        <SideBar/>
      </div>
    )
}