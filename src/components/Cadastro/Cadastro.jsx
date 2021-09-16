import React from "react"
import './Cadastro.css'
import CadastroHeader from './CadastroHeader.jsx'

export default function Cadastro(props) {
    return (
     <div>
         <CadastroHeader/>
        <div id="container">
            <div class="cadasbody">
            <h2>Realize seu cadastro!</h2>
            <form>
                <fieldset>
                    <div class="input-block">
                        <label for="name">Nome completo</label>
                        <input name="name" id="name" required/>
                    </div>

                    <div class="input-block">
                        <label for="endereço"> Endereço</label>
                        <input name="endereço" id="endereço" required/>
                    </div>

                    <div class="input-block">
                        <label for="telefone">Telefone ou WhatsApp: </label>
                        <input name="telefone" id="whatsapp" type="number" required/>
                    </div>
                    <button type="submit">Salvar</button>
                </fieldset>
            </form>
            </div>
    </div>

    </div>
    )
}