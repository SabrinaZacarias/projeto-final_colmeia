import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import ContaUser from './paginas/ContaUser/ContaUser'
import ContaOng from './paginas/ContaOng/ContaOng'
import Trabalhos from './paginas/Trabalhos/Trabalhos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import QuemSou from './paginas/QuemSou/QuemSou'
import Projeto from './paginas/Projeto/Projeto'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/conta-usuario" component={ContaUser}/>
        <Route path="/conta-entidade" component={ContaOng}/>
        <Route path="/trabalhos" component={Trabalhos} />
        <Route path="/contato" component={Contato} />
        <Route path="/quem-sou" component={QuemSou} />
        <Route path="/projeto" component={Projeto} />
        <Route component={NaoEncontrada} />
      </Switch>
      
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('projeto')
)
