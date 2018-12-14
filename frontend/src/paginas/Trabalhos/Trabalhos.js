import React, {Component} from 'react'
import Link from '../../componentes/Link/Link'
import logo from './loguinho.png'
import './Trabalhos.css'


class Trabalhos extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let names = ['hex1', 'hex2', 'hex3'].map( (name, index) => {
      return <img key={index} alt="" className="imagens" src={require(`./img/${name}.png`)} />
    } )
    let nomes = ['hex4', 'hex5'].map( (nome, index) => {
      return <img key={index} alt="" className="imagens" src={require(`./img/${nome}.png`)} />
    } )
    return (
      <main className="trabalhos">
        <h2><img id="loguinho" src={logo}/>PROJETOS DISPONÍVEIS</h2>
        <div>
          <Link url='/projeto'> { names }  </Link>   
        </div>
        <div>
        <Link url='/projeto'> { nomes }  </Link>   
        </div>
      
      </main>
    );
  }
    
}  
  export default Trabalhos