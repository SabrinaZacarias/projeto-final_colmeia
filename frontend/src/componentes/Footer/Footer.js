import React from 'react'
import Aside from '../Aside/Aside'
import logo from './img/logobco.png'
import pin from './img/pin.png'
import mail from './img/mail.png'
import phone from './img/phone.png'
import './Footer.css'

function Footer (){
    return(
        <footer className="footer">
            <img id="logo-footer" src={logo}/>
            <section id="foter--section">
                <div className="icones">
                    <img src={pin}/>
                    <article>
                        <p>Avenida Paulista, 1374</p>
                        <p>Bela Vista - São Paulo</p>
                    </article>
                    
                </div>
                <div className="icones">
                    <img  src={mail}/>
                    <p>contato@wearecolmeia.com.br</p>
                </div>
                <div className="icones">
                    <img src={phone}/>
                    <p>(11)1234-5678 | (11)98765-4321</p>
                </div>
            </section>
            <Aside/>

        </footer>
    )
}

export default Footer