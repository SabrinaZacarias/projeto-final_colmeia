import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logaUsuario } from '../../redux/actions'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import Campo from '../../componentes/Campo/Campo'
import logo from './loguinho.png'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    this.emailRef = React.createRef() 
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  enviaDados = (evento) => {
    evento.preventDefault()

    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    const dados = {
      email: campoEmail.getValor(),
      senha: campoSenha.getValor() 
    }

    this.props.logaUsuario(dados)
  }

  habilitaOuDesabilitaBotao = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
    if (this.props.usuario) {
      return <Redirect to="/trabalhos" />
    }

    return (
      <main className="login">
      <section className="login--section">
        <h2><img id="loguinho-login" src={logo}/>LOGIN</h2>
        
        <Formulario onSubmit={this.enviaDados}>
          <Campo ref={this.emailRef} id="login-email" type="email" name="email" required onChange={this.habilitaOuDesabilitaBotao} />
          
          <Campo ref={this.senhaRef} id="login-senha" type="password" name="senha" required minLength={6} onChange={this.habilitaOuDesabilitaBotao} />
          
          <div id="botao-login">
            <Formulario.Botao desabilitado={this.state.desabilitado}>
             ENTRAR
            </Formulario.Botao>
          </div>
        </Formulario>

        <Link url="/quem-sou">Quero fazer parte da Colmeia!</Link>
        </section>
      </main>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario }), 
  { logaUsuario }
)(Login)