import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './components/Board'

function App() {

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board></Board>
    </div>
  )
}

export default App
