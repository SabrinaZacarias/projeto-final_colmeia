import React from 'react'
import Link from '../../componentes/Link/Link'
import logo from './loguinho.png'
import './QuemSou.css'

function QuemSou (){

    return(
        <main className="quem-sou">
            <section className="quem-sou--section">
            <h2><img id="loguinho--quem-sou" src={logo}/>QUEM SOU</h2>
            <Link url="/conta-entidade"><button className="botao--quem-sou" id="entidade">ENTIDADE</button></Link>
            <p>ou</p>
            <Link url="/conta-usuario"><button className="botao--quem-sou" id="colab">COLABORADOR</button></Link>

            </section>
        </main>
    )
}

export default QuemSou