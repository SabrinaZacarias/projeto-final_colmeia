import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { cadastraUsuario } from '../../redux/actions'
import Link from '../../componentes/Link/Link'
import Formulario from '../../componentes/Formulario/Formulario'
import Label from '../../componentes/Label/Label'
import Campo from '../../componentes/Campo/Campo'
import logo from './loguinho.png'
import './ContaOng.css'


class ContaOng extends Component {
  constructor(props) {
    super(props)
    
    this.entidadeRef = React.createRef()
    this.nomeRef = React.createRef()
    this.cnpjRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    
    this.state = { desabilitado: true }
  }
  
  enviaDados = (evento) => {
    evento.preventDefault()
    
    const campoNome = this.nomeRef.current
    const campoEntidade = this.entidadeRef.current
    const campoCnpj = this.cnpjRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    const dados = {
        nome: campoNome.getValor(),
        entidade: campoEntidade.getValor(),
        cnpj: campoCnpj.getValor(),
        telefone: campoTelefone.getValor(),
      email: campoEmail.getValor(),
      senha: campoSenha.getValor()
    }
    
    this.props.cadastraUsuario(dados)
  }
  
  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoEntidade = this.entidadeRef.current
    const campoCnpj = this.cnpjRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    if (campoNome.temErro() || campoEntidade.temErro() || campoCnpj.temErro() || campoTelefone.temErro() || campoEmail.temErro() || campoSenha.temErro()) {
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
      <main className="conta-ong">
        <section className="conta-ong--section">
          <h1 id="h1-ong"><img id="loguinho-ong" src={logo}/>FAÇA SEU CADASTRO</h1>
          <Formulario onSubmit={this.enviaDados}>
            <Label htmlFor="nome">NOME DA ENTIDADE:</Label>
            <Campo className="campo--conta-ong" ref={this.entidadeRef} id="nome-entidade" type="text" name="entidade" required minLength={10} onChange={this.habilitaOuDesabilita} />
      
      
            <Label htmlFor="cnpj">CNPJ:</Label>
            <Campo className="campo--conta-ong" ref={this.cnpjRef} id="cnpj" type="text" name="cnpj" required onChange={this.habilitaOuDesabilita} />
      
            <Label htmlFor="nome">NOME PARA CONTATO:</Label>
            <Campo className="campo--conta-ong" ref={this.nomeRef} id="nome" type="text" name="nome" required minLength={10} onChange={this.habilitaOuDesabilita} />
      
            <Label htmlFor="email">EMAIL:</Label>
            <Campo className="campo--conta-ong" ref={this.emailRef} id="email" type="email" name="email" required onChange={this.habilitaOuDesabilita} />
      

            <Label htmlFor="telefone">TELEFONE:</Label>
            <Campo className="campo--conta-ong" ref={this.telefoneRef} id="telefone" type="tel" name="telefone" required onChange={this.habilitaOuDesabilita} />
            <div className='campo-senha'>
                <div>
                    <Label htmlFor="senha">SENHA:</Label>
                    <Campo className="campo--conta-ong senha" ref={this.senhaRef} id="senha" type="password" name="senha" required minLength={6} onChange={this.habilitaOuDesabilita} />
                </div>
                <div>
                    <Label htmlFor="senha">REPETE SENHA:</Label>
                    <Campo className="campo--conta-ong senha" ref={this.senhaRef} id="repete-senha" type="password" name="senha" required minLength={6} onChange={this.habilitaOuDesabilita} />
                </div>
            </div>
            <div id="botao-ong">
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
    )(ContaOng)