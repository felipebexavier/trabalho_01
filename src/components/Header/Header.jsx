import React from "react"
import { Link } from "react-router-dom"

import './Header.css';

export default function Header() {
    return (
        <header className="image-container">

            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>
                        <li> <Link to = "/CPI"> CP-I </Link> </li>
                        <li> <Link to = "/CPII"> CP-II </Link> </li>
                        <li> <Link to = "/CPIII"> CP-III </Link> </li>
                        <li> <Link to = "/CPIV"> CP-IV </Link> </li>
                        <li> <Link to = "/cadastro"> Cadastro </Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}