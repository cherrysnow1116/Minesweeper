import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;

  background: #79817f;
`
const Board = styled.div`
  height: 400px;
  width: 300px;
  background-color: white;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
const Face = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: yellow;
  transform: translate(400%, 135%);
`
const Block = styled.div<{ isOpen: boolean; num: number }>`
  display: inline-block;
  width: 25px;
  height: 25px;
  font-weight: bold;
  vertical-align: bottom;
  text-align: center;
  background-color: ${(props) => (props.isOpen ? 'white' : `grey`)};
  border: 1px solid black;
  color: ${(props) => (props.num < 9 && props.num > 0 ? COLORS[props.num - 1] : 'black')};
  border-bottom: transparent; /* 下が透明になる */
`
const Field = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 10px;
  left: 0;
  width: 225px;
  height: 225px;
  margin: auto;
  background-color: #d6cdcd;
`
const BombBlock = styled.div`
  background-color: #faf4f4;
  color: red;
  display: inline-block;
  width: 25px;
  height: 25px;
  font-weight: bold;
  vertical-align: bottom;
  text-align: center;
  border: 1px solid black;
  border-bottom: transparent;
`
const COLORS = ['blue', 'green', 'red', 'purple', 'brown', 'yellow', 'black', 'pink']
const Home: NextPage = () => {
  const [bombs, setbombs] = useState([
    { x: 0, y: 0 },
    { x: 2, y: 3 },
  ])
  // prettier-ignore
  const [board,setBoard]=useState([
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  
  ])
  const onClick = (x: number, y: number) => {
    console.log(x, y)
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    let Newnum = 0
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x - 1 && bombs[i].y === y) {
        Newnum += 1
      } else {
        newBoard[y][x] = 0
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x + 1 && bombs[i].y === y) {
        Newnum += 1
      }
    }

    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x && bombs[i].y === y + 1) {
        Newnum += 1
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x && bombs[i].y === y - 1) {
        Newnum += 1
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x + 1 && bombs[i].y === y - 1) {
        Newnum += 1
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x + 1 && bombs[i].y === y + 1) {
        Newnum += 1
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x - 1 && bombs[i].y === y + 1) {
        Newnum += 1
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].x === x - 1 && bombs[i].y === y - 1) {
        Newnum += 1
      }
    }
    if (10 < Newnum) {
      Newnum = 10
    }
    newBoard[y][x] = Newnum

    setBoard(newBoard)
  }

  return (
    <Container>
      <Board>
        <Face></Face>
        <Field>
          {board.map((row, y) =>
            row.map((num, x) =>
              num === 10 ? (
                <BombBlock>●</BombBlock>
              ) : (
                <Block key={`${x}-${y}`} isOpen={num < 9} num={num} onClick={() => onClick(x, y)}>
                  {num < 9 && num !== 0 && num}
                </Block>
              )
            )
          )}
        </Field>
      </Board>
    </Container>
  )
}

export default Home
