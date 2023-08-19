import { ReactNode, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

type Props = {
  onClick?: VoidFunction
  children: ReactNode
  className?: string
  isActive?: boolean
}

export const Button = ({ onClick, children, className, isActive = false }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const handleClick = () => {
    timer.current && clearTimeout(timer.current)
    setIsAnimating(true)
    onClick?.()

    timer.current = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  return (
    <ButtonStyled className={className} onClick={handleClick} $isAnimating={isAnimating} $isActive={isActive}>
      {children}
    </ButtonStyled>
  )
}

const topBubbles = keyframes`
  0%{
    background-position: 10% 120%, 25% 90%, 40% 90%, 70% 90%;
  }
 100% {
    background-position: 8% 40%, 30% 20%, 50% 40%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`

const bottomBubbles = keyframes`
  0%{
    background-position: 10% -10%, 55% 5%, 85% 0%, 70% 0%;
  }
 100% {
    background-position: 0% 90%, 45% 70%, 95% 80%, 80% 60%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`

const isActiveStyle = css`
  ${({ theme }) => css`
    color: ${theme.white};
    background-color: ${theme.textColour};
  `}
`

export const ButtonStyled = styled.button<{ $isAnimating: boolean; $isActive: boolean }>`
  ${({ theme, $isAnimating, $isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0rem 2rem;
    background-color: white;
    color: ${theme.textColour};
    border: 1px solid ${theme.textColour}20;
    border-radius: 100px;
    height: 3rem;

    position: relative;
    transition: transform ease-in 0.1s, background-color ease-in 0.1s;

    ${$isActive && isActiveStyle}
    &:hover {
      ${isActiveStyle}
    }

    &:before,
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 140%;
      height: 100%;
      left: -20%;
      z-index: -1000;
      transition: all ease-in-out 0.5s;
      background-repeat: no-repeat;
    }

    &:before {
      display: none;
      top: -90%;
      background-image: radial-gradient(circle, ${theme.textColour} 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, ${theme.textColour} 15%, transparent 20%),
        radial-gradient(circle, ${theme.textColour} 20%, transparent 20%),
        radial-gradient(circle, ${theme.textColour} 20%, transparent 20%);
      background-size: 18px 18px, 15px 15px, 12px 12px, 15px 15px;
    }

    &:after {
      display: none;
      bottom: -90%;
      background-image: radial-gradient(circle, ${theme.textColour} 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, ${theme.textColour} 15%, transparent 20%),
        radial-gradient(circle, ${theme.textColour} 20%, transparent 20%),
        radial-gradient(circle, ${theme.textColour} 20%, transparent 20%);
      background-size: 15% 15%, 18% 18%, 15% 15%, 20% 20%;
    }

    &:active {
      transform: scale(0.95);
    }

    ${$isAnimating && isAnimatingStyles}
  `}
`

const isAnimatingStyles = css`
  &:before {
    display: block;
    animation: ${topBubbles} ease-in-out 0.75s forwards;
  }
  &:after {
    display: block;
    animation: ${bottomBubbles} ease-in-out 0.75s forwards;
  }
`
