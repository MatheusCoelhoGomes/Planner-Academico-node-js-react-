import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
            <h1>PLANNER ACADÊMICO</h1>
            <nav>
                <ul>
                    <li><Link to="/Agenda">Agenda</Link></li>
                    <li><Link to="/Notas">Notas</Link></li>
                    <li><Link to="/Desempenho">Desempenho</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
