import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

// <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
// const props = { usuario: props.usuario, deslogaUsuario: props.deslogaUsuario }
class Menu extends Component {
  constructor(props) {
    super(props)
    this.filtroRef = React.createRef()
    this.state = { aberto: false }
  }

  abreOuFechaMenu = () => {
    if (this.state.aberto) {
      this.setState({ aberto: false })
    } else {
      this.setState({ aberto: true })
    }
  }

  sair = () => {
    this.abreOuFechaMenu()
    this.props.deslogaUsuario()
  }

   
  render() {
    let classesDoBotao = 'navbar-menu__botao'
    let classesDasOpcoes = 'navbar-menu__opcoes'

    if (this.state.aberto) {
      classesDoBotao += ' navbar-menu__botao--aberto'
      classesDasOpcoes += ' navbar-menu__opcoes--aberto'
    }

    if (this.props.usuario) {
      classesDasOpcoes += ' navbar-menu__opcoes--logado'
    }

    return (
      <nav className="navbar-menu">
        <button className={classesDoBotao} onClick={this.abreOuFechaMenu}>
          Menu
        </button>

        <ul className={classesDasOpcoes}>
          <li>
            <NavLink to="/trabalhos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Trabalhos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Contato
            </NavLink>
          </li>
          {this.props.usuario ? (
            <li>
              <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>
                Sair
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                Login
              </NavLink>
            </li>
          )}
          
        </ul>
      </nav>
    )
  }
}

export default Menu
