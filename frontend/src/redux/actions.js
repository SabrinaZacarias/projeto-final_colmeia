import axios from 'axios'

const configuracoes = {
  baseURL: 'http://localhost:5000/api'
}

const json = localStorage.getItem('usuario')
if (json) {
  const usuario = JSON.parse(json)
  configuracoes.headers = {
    'x-access-token': usuario.token
  }
}

const api = axios.create(configuracoes)

export function logaUsuario(dados) {
  return (dispatch) => {
    const json = {
      email: dados.email,
      password: dados.senha
    }

    api
      .post('/login', json)
      .then(response => {
        api.defaults.headers.common['x-access-token'] = response.data.token
        dispatch({ type: 'LOGA_USUARIO', dados: response.data })
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data.erro)
        }
        alert('Email ou usuário invalido!')
      })
  }
}

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
}

export function cadastraUsuario(dados) {
  return (dispatch) => {
    const json = {
      name: dados.nome,
      phone: dados.telefone,
      email: dados.email,
      password: dados.senha
    }

    api
      .post('/users', json)
      .then(() => {
        dispatch(logaUsuario(dados))
      })
  }
}

export function cadastraOng(dados) {
  return (dispatch) => {
    const json = {
      name: dados.nome,
      entidade: dados.entidade,
      cnpj: dados.cnpj,
      phone: dados.telefone,
      email: dados.email,
      password: dados.senha
    }

    api
      .post('/users', json)
      .then(() => {
          dispatch(logaUsuario(dados))
        })
      
  }
}

