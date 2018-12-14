import React, {Component} from 'react'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Formulario from '../../componentes/Formulario/Formulario'
import logo from './loguinho.png'
import './Contato.css'

class Contato extends Component {
  constructor(props) {
    super(props)
    
    this.nomeRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()
    this.mensagemRef = React.createRef()
    
    
    this.state = { desabilitado: true }
  }
  enviaDados = (evento) => {
    evento.preventDefault()
    
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoMensagem = this.mensagemRef.current
    
    const dados = {
      nome: campoNome.getValor(),
      telefone: campoTelefone.getValor(),
      email: campoEmail.getValor(),
      mensagem: campoMensagem.getValor()
    }
    
    this.props.cadastraUsuario(dados)
  } 
  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    
    if (campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }
  
  render(){
  return (
    <main className="contato">
      <section className="contato--section">
        <h2><img id="loguinho-contato" src={logo}/>Contato</h2>
        <Formulario onSubmit={this.enviaDados}>
    
          <Legenda className="label--contato" htmlFor="nome">NOME COMPLETO:</Legenda>
          <Campo className="campo--contato" ref={this.nomeRef} id="nome" type="text" name="nome" required minLength={10} onChange={this.habilitaOuDesabilita} />
      
      
          <Legenda className="label--contato" htmlFor="email">EMAIL:</Legenda>
          <Campo className="campo--contato" ref={this.emailRef} id="email" type="email" name="email" required onChange={this.habilitaOuDesabilita} />
      
          <Legenda className="label--contato" htmlFor="telefone">TELEFONE:</Legenda>
          <Campo className="campo--contato" ref={this.telefoneRef} id="telefone" type="tel" name="telefone" required onChange={this.habilitaOuDesabilita} />

          <Legenda className="label--contato" htmlFor="mensagem">MENSAGEM:</Legenda>
          <textarea className="textarea--contato" ref={this.mensagemRef} name="mensagem"  onChange={this.habilitaOuDesabilita} ></textarea>
          <div id="botao-contato">
            <Formulario.Botao desabilitado={this.state.desabilitado}>ENVIAR</Formulario.Botao>
          </div>
        </Formulario>
      </section>
    </main>
  )
}

}

export default Contato