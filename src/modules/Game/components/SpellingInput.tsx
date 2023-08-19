import { Fragment } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { lighten } from 'polished'
import { BackKey } from './BackKey'

type Props = {
  letters: string | undefined
  centerLetter: string
  handleDelete: VoidFunction
}

export const SpellingInput = ({ letters, centerLetter, handleDelete }: Props) => {
  const isLetterUndefined = letters === undefined

  return (
    <Container>
      <InputText>
        {!isLetterUndefined &&
          Array.from(letters.toUpperCase()).map((letter, i) => {
            const arrayKey = `${letter}-${i}`
            if (letter === centerLetter.toUpperCase()) {
              return <CenterLetter key={arrayKey}>{letter}</CenterLetter>
            }
            return <Fragment key={arrayKey}>{letter}</Fragment>
          })}
      </InputText>
      <Cursor $isLetterUndefined={isLetterUndefined} />
      {isLetterUndefined && <Placeholder>Type or click</Placeholder>}
      {!isLetterUndefined && (
        <BackKeyButton onClick={handleDelete}>
          <BackKey />
        </BackKeyButton>
      )}
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
  text-align: center;
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
  text-align: center;
`

const tapTarget = css`
  ${({ theme }) => css`
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 3rem;
      height: 3rem;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 100%;
      transition: background 0.15s ease;
    }

    &:active:before {
      background: ${theme.lightGrey};
      z-index: 1;
    }
  `}
`

const BackKeyButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.textColour};
    margin-left: 10px;

    svg {
      position: relative;
      z-index: 2;
      width: 30px;
    }

    // Increases the tap target for accessibility
    ${tapTarget}
  `}
`
