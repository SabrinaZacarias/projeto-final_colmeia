import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { cadastraUsuario } from '../../redux/actions'
import Link from '../../componentes/Link/Link'
import Formulario from '../../componentes/Formulario/Formulario'
import Label from '../../componentes/Label/Label'
import Campo from '../../componentes/Campo/Campo'
import logo from './loguinho.png'
import './ContaUser.css'

class ContaUser extends Component {
  constructor(props) {
    super(props)
    
    this.nomeRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    
    this.state = { desabilitado: true }
  }
  
  enviaDados = (evento) => {
    evento.preventDefault()
    
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    const dados = {
      nome: campoNome.getValor(),
      telefone: campoTelefone.getValor(),
      email: campoEmail.getValor(),
      senha: campoSenha.getValor()
    }
    
    this.props.cadastraUsuario(dados)
  }
  
  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    if (campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }
  
  render() {
    if (this.props.usuario) {
      return <Redirect to="/" />
    }
    
    return (
      <main className="conta">
        <section className="conta--section">
          <h1 id="h1-user"><img id="loguinho" src={logo}/>FAÇA SEU CADASTRO</h1>
          <Formulario onSubmit={this.enviaDados}>
            <Label htmlFor="nome">NOME COMPLETO:</Label>
            <Campo className="campo--conta" ref={this.nomeRef} id="nome" type="text" name="nome" required minLength={10} onChange={this.habilitaOuDesabilita} />
      
      
            <Label htmlFor="email">EMAIL:</Label>
            <Campo className="campo--conta" ref={this.emailRef} id="email" type="email" name="email" required onChange={this.habilitaOuDesabilita} />
      
            <Label htmlFor="telefone">TELEFONE:</Label>
            <Campo className="campo--conta" ref={this.telefoneRef} id="telefone" type="tel" name="telefone" required onChange={this.habilitaOuDesabilita} />
            <div className="campo-senha">
              <div>
                <Label htmlFor="senha">SENHA:</Label>
                <Campo className="campo--conta senha" ref={this.senhaRef} id="senha" type="password" name="senha" required minLength={6} onChange={this.habilitaOuDesabilita} />
              </div>
              <div>
                <Label htmlFor="senha">REPETE SENHA:</Label>
                <Campo className="campo--conta senha" ref={this.senhaRef} id="repete-senha" type="password" name="senha" required minLength={6} onChange={this.habilitaOuDesabilita} />
              </div>
            </div>
            <div id="botao-user">
              <Formulario.Botao desabilitado={this.state.desabilitado}>CADASTRAR</Formulario.Botao>
            </div>
            <Link url="/login">Já sou parte da Colmeia</Link>
          </Formulario>
        </section>
      </main>
      )
    }
  }
  
  export default connect(
    (state) => ({ usuario: state.usuario }), 
    { cadastraUsuario }
    )(ContaUser)