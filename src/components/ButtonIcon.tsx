import { darken } from 'polished'
import styled, { css } from 'styled-components'

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

    &:hover:before {
      background: ${theme.lightGrey};
      z-index: 1;
    }

    &:active:before {
      background: ${darken(0.1, theme.lightGrey)};
      z-index: 1;
    }
  `}
`

export const ButtonIcon = styled.button`
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
