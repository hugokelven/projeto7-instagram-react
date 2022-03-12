import Logo from "./Componentes/Logo"
import LogoMobile from "./Componentes/LogoMobile"
import InstagramMobile from "./Componentes/InstagramMobile"
import BarraPesquisa from "./Componentes/BarraPesquisa"
import Icones from "./Componentes/Icones"
import IconesMobile from "./Componentes/IconesMobile"

export default function Container() {
  return (
    <div class="container">
      <Logo />
      <LogoMobile />
      <InstagramMobile />
      <BarraPesquisa />
      <Icones />
      <IconesMobile />
    </div>
  )
}