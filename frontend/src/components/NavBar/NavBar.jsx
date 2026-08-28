import React from 'react'
import './NavBar.css'
import logoUnirio from '../../assets/unirio.png'

const NavBar = () => {
    return(
        <div className='navbar'>
            <img src={logoUnirio} alt='logo' className='logo'/>
            <ul>
                <li>Agenda</li>
                <li>notas</li>
                <li>Desempenho</li>
            </ul>
        </div>
    )
}

export default NavBar
