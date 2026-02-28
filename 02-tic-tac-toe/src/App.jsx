import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { Board } from './components/Board.jsx'
import { TURNS} from './constants'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  })

  const [winner, setWinner] = useState(null) //Null es que no hay ganador, false es que hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

 
  const updateBoard = (index) => {

    /*No actualizamos esta posición
    si ya tiene un valor*/
    if (board[index] || winner) {
      return
    }

    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn  = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardar partida en localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))

    //Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      console.log('El ganador es: ' + newWinner)
      console.log('El ganador es: ' + winner)
      confetti()
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      console.log('Empate')
      setWinner(false) //Empate
    }
  }

  console.log(board)
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick = {resetGame}>Reiniciar juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
