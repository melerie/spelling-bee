import { styled } from 'styled-components'
import { useSpellingBee } from '../../context'

export const WordList = () => {
  const { gameData } = useSpellingBee()

  if (!gameData) {
    return <p>No data</p>
  }

  const { foundAnswers, numberOfAnswers } = gameData
  const foundWords = foundAnswers.map((answer) => answer.word) ?? []

  return (
    <Content>
      <p>
        {foundAnswers.length} out of {numberOfAnswers} answers found
      </p>
      <Ul>
        {foundWords.map((word) => (
          <Li key={word}>{word}</Li>
        ))}
      </Ul>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`

const Ul = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`

const Li = styled.li`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`
