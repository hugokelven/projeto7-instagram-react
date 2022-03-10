import Usuario from "./SideBar-SubComp/Usuario"
import Sugestoes from "./SideBar-SubComp/Sugestoes"
import Links from "./SideBar-SubComp/Links"
import Copyright from "./SideBar-SubComp/Copyright"

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