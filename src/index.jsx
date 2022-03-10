import ReactDOM from 'react-dom'
import NavBar from './NavBar/NavBar'
import Corpo from './Corpo/Corpo'
import FundoMobile from './FundoMobile/FundoMobile'

function App() {
    return (
        <div>
            <NavBar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}

const app = App()
ReactDOM.render(app, document.querySelector(".root"))