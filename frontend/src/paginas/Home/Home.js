import React from 'react'
import './Home.css'
import bee from './img/bee.jpg'
import logo from './img/logobco.png'
import arrow from './img/seta.png'
import icon from './img/icon.png'
import hexa from './img/hexagonos.png'

function Home (){
  return(
    <main>
      <section className="home">
        <div id="alinhar-imgs">
          <img src={bee} id="bee"/>
          <img src={logo} id="logo"/>
        </div>
        <div className="alinhar-texto">
          <h2>CRIAÇÃO, CRESCIMENTO E COLABORAÇÃO</h2>
          <a href="#sobre"><img src={arrow} id="arrow"/></a>
        </div>
      </section>
      <section id="sobre">
        <div className="descricao">
          <h3>SOBR<img src={icon} id="icon"/> NÓS</h3>
          <p>Somos uma plataforma que, através da mão de obra voluntária de alunos e/ou profissionais cadastrados em nosso site, oferece serviços gráficos e tecnológicos sem custo para ONGs e Projetos Sociais, também cadastrados, como impressos, digitais, web sites e etc. O estudante após desenvolver o projeto pode utilizá-lo em seu portfólio, tendo um diferencial ao se candidatar para vagas de trabalhos.</p>
        </div>
        <img src={hexa} id="hexa"/>
      </section>
    </main>
  )
}


export default Home

