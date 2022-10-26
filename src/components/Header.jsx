//css
import './Header.css'
import { FaBars } from "react-icons/fa";


const Header = () => {

  return (
    <div>
      <header className="header">
        <nav>
          <h1>Header</h1>
          <ul className="links">
            <li> Apartamentos </li>
            <li> Anuncie </li>
            <li> Cadastrar </li>
            <li> Fazer Login </li>
          </ul>
          <span className="display-menu"><FaBars className="menu" /></span>
        </nav>
      </header>
    </div>
  )
}

export default Header