import { darken } from 'polished'
import { css, styled } from 'styled-components'

export const HexagonContainer = styled.div`
  position: relative;
  grid-column-end: span 2;

  &:after {
    content: '';
    padding-bottom: 86.602%;
    display: block;
  }
`

export const HexagonButtonWrapper = styled.div<{ isMouseDown: boolean }>`
  position: absolute;
  width: 100%;
  // The padding-bottom value indicates the ratio of the height to the width
  padding-bottom: 115.47%;
  overflow: hidden;
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  pointer-events: none;
  transition: all 0.15s ease-out;

  ${({ isMouseDown }) =>
    isMouseDown &&
    css`
      transform: rotate3d(0, 0, 1, -60deg) skewY(30deg) scale3d(0.86, 0.86, 1);
    `}
`

const buttonHoverWidth = 5
const buttonHoverStyle = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    pointer-events: none;

    border-radius: 50%;
    display: block;
    width: ${buttonHoverWidth * 2}em;
    height: ${buttonHoverWidth * 2}em;
    line-height: ${buttonHoverWidth * 2}em;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    transition: box-shadow 0.3s ease-out;
    z-index: -1;
    filter: blur(10px);
  }

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.lightGrey)};
  }
`

export const HexagonButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
    transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
    background-color: ${theme.lightGrey};
    pointer-events: all;
    transition: background-color 0.15s ease-out;

    ${buttonHoverStyle}
  `}
`

export const HexagonContent = styled.span`
  position: absolute;
  left: 50%;
  // Minus 1em to account for the font-size
  top: calc(75% - 1em);
  transform: translateX(-50%);
  pointer-events: none;

  &:nth-child(4) {
    color: ${({ theme }) => theme.white};
  }

  font-weight: bold;
  font-size: 1.2rem;
`

export const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
  width: 100%;
`

export const HexagonsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: 6px;
    width: 100%;
    grid-template-columns: repeat(6, 2fr);
    padding-bottom: 10%;

    ${HexagonContainer}:nth-child(5n+1) {
      grid-column-start: 2;
    }

    ${HexagonContainer}:nth-child(5n+3) {
      grid-column-start: 1;
    }

    ${HexagonContainer}:nth-child(4) {
      ${HexagonButton} {
        background-color: ${theme.primary};
      }
      &:hover {
        ${HexagonButton} {
          background-color: ${theme.dark};
        }
      }

      &:hover {
        ${HexagonContent} {
          color: ${theme.white};
        }
      }
    }
  `}
`
