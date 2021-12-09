import type { NextPage } from 'next'
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
  top: 10%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
const Face = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: yellow;
  transform: translate(400%, 425%);
`
const Basis = styled.div``
const Home: NextPage = () => {
  return (
    <Container>
      <Board>
        <Face></Face>
      </Board>
    </Container>
  )
}

export default Home
