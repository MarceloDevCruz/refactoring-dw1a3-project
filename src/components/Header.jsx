//css
import './Header.css'
import { FaBars } from "react-icons/fa";

//hook
import { useState } from 'react'

// router dom
import { NavLink } from 'react-router-dom'


const Header = () => {

  return (
    <div>
      <header className="header">
        <nav>
          <NavLink to="/"><h1>DW1A3</h1></NavLink>
          <ul className="links">
            <li><NavLink to="/apartamentos"> Apartamentos</NavLink> </li>
            <li> <NavLink to="/anuncie"> Anuncie </NavLink></li>
            <li><NavLink to="/register"> Cadastrar</NavLink> </li>
            <li><NavLink to="/login"> Fazer Login</NavLink> </li>
            <li> <NavLink to="/sobre">Sobre </NavLink></li>
          </ul>
          <span className="display-menu"><FaBars className="menu" /></span>
        </nav>
      </header>
    </div >
  )
}

export default Header