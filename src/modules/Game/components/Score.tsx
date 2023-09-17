import { css, styled } from 'styled-components'
import { useSpellingBee } from '../../../context'

type Props = {
  title: string
  score: number
  totalScore: number
}

export const Score = () => {
  const { gameData } = useSpellingBee()

  const numberOfAnswers = gameData?.foundAnswers.length ?? 0
  const totalNumberOfWords = gameData?.numberOfAnswers ?? 0

  const pointsOfAnswers = gameData?.foundAnswers.reduce((acc, answer) => acc + answer.score, 0) ?? 0
  const totalPointsOfWords = gameData?.totalScore ?? 0

  return (
    <Content>
      <ScoreItem title={`${numberOfAnswers} word(s)`} score={numberOfAnswers} totalScore={totalNumberOfWords} />
      <ScoreItem title={`${pointsOfAnswers} point(s)`} score={pointsOfAnswers} totalScore={totalPointsOfWords} />
    </Content>
  )
}

const ScoreItem = ({ title, score, totalScore }: Props) => {
  const percentage = (score / totalScore) * 100

  return (
    <ScoreContainer>
      <Title>{title}</Title>
      <BarContainer>
        <BarText>{score}</BarText>
        <Bar>
          <Progress $percentage={percentage} />
        </Bar>
        <BarText>{totalScore}</BarText>
      </BarContainer>
    </ScoreContainer>
  )
}

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 0.5rem;
`

const ScoreContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100px;
  gap: 0.2rem;
`

const Title = styled.p`
  font-size: 1rem;
  text-align: center;
`

const BarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`

const BarText = styled.p`
  font-size: 0.7rem;
`

const Bar = styled.div`
  width: 100%;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.textColour};
`

const Progress = styled.div<{ $percentage: number }>`
  ${({ theme, $percentage }) => css`
    width: ${$percentage}%;
    height: 100%;
    background: ${theme.primary};
  `}
`
