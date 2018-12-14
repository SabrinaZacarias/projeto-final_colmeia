import React from 'react'
import './NaoEncontrada.css'
import sadbee from './sadbee.jpg'

function NaoEncontrada() {
  return (
    <main className="nao-encontrada">
      <h1>Página não encontrada</h1>
      <img src={sadbee}/>
    </main>
  )
}

export default NaoEncontrada