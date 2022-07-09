
import './App.css';
import React, {useState} from 'react';
import Square from './components/square';
import styled from 'styled-components'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  const handleClick = (index)=>{
    const temp  = board.slice()
    if(player){
      temp[index] = "X"
    }else{
      temp[index] = "O"
    }
    setBoard(temp)
    setPlayer(!player)
  }
  const winner = caculateWinner(board)
  const handleResetGame = ()=>{
    setBoard(Array(9).fill(null))
  }
  return (
    <Container>
      {winner ? <h3> Win: {winner} </h3> : null}
    <Board>
      {board.map((item, index) => <Square value={item} handleClick={handleClick} winnerGame={winner} index={index} key={index}/>)}
    </Board>
    <div>
    <button onClick={handleResetGame}>Reset game</button>
    </div>
    </Container>
  );
}


const Board = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 200px;
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: green;
`
const caculateWinner = (board)=>{
  const winLine = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
  ];
  for(let i = 0; i< winLine.length; i++){
    const [a,b,c] = winLine[i]
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      return board[a]
    }
  }
  return null

}

export default App;
