import React from "react"
import { Link } from "react-router-dom"

import '../Header/Header.css'

export default function CadastroHeader() {
    return (
        <header className="image-container">
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>
                        <li> <Link to = "/cadastro"> Cadastro </Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}