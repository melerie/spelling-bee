import styled, { css, keyframes } from 'styled-components'
import { lighten } from 'polished'

type Props = {
  letters: string | undefined
  centerLetter: string
}

export const SpellingInput = ({ letters, centerLetter }: Props) => {
  const isLetterUndefined = letters === undefined

  return (
    <Container>
      <InputText>
        {!isLetterUndefined &&
          Array.from(letters.toUpperCase()).map((letter) => {
            if (letter === centerLetter.toUpperCase()) {
              return <CenterLetter>{letter}</CenterLetter>
            }
            return letter
          })}
      </InputText>
      <Cursor $isLetterUndefined={isLetterUndefined} />
      {isLetterUndefined && <Placeholder>Type or click</Placeholder>}
    </Container>
  )
}

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  // This is the same as the line height
  height: 1.6em;
`

const InputText = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const CenterLetter = styled.span`
  ${({ theme }) => css`
    color: ${theme.primary};
  `}
`

const Cursor = styled.span<{ $isLetterUndefined: boolean }>`
  ${({ theme, $isLetterUndefined }) => css`
    display: inline-block;
    width: 0.15em;
    height: 1.2em;
    background: ${theme.primary};
    animation: 1000ms ${blink} step-end infinite;

    ${$isLetterUndefined
      ? css`
          margin-right: 0.2em;
        `
      : css`
          margin-left: 0.2em;
        `}
  `}
`

const Placeholder = styled.span`
  color: ${({ theme }) => lighten(0.2, theme.textColour)};
`
