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
    &::before {
      box-shadow: inset 0 0 0 ${buttonHoverWidth}em #dcdcdc;
    }
  }
`

export const HexagonButton = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  background-color: #e6e6e6;
  pointer-events: all;

  ${buttonHoverStyle}
`

export const HexagonContent = styled.span`
  position: absolute;
  left: 50%;
  // Minus 1em to account for the font-size
  top: calc(75% - 1em);
  transform: translateX(-50%);
  pointer-events: none;

  font-weight: bold;
`

export const Container = styled.div`
  display: grid;
  grid-gap: 6px;
  max-width: 250px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(6, 2fr);
  padding-bottom: 5.4%;

  ${HexagonContainer}:nth-child(5n+1) {
    grid-column-start: 2;
  }

  ${HexagonContainer}:nth-child(5n+3) {
    grid-column-start: 1;
  }

  ${HexagonContainer}:nth-child(4) {
    ${HexagonButton} {
      background-color: #6acaf3;
      &:hover {
        &::before {
          box-shadow: inset 0 0 0 ${buttonHoverWidth}em #64c0e7;
        }
      }
    }
  }
`
