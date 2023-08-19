import { ReactNode } from 'react'
import { css, styled } from 'styled-components'
import { Button } from '../Button'
import { useDrawer } from '../../context'
import { Close } from './Close'
import { ButtonIcon } from '../ButtonIcon'

type Props = {
  index: number
  buttonText: string
  title?: string
  children: ReactNode
}

export const Drawer = ({ index, buttonText, title, children }: Props) => {
  const { drawerIndex, setDrawerIndex } = useDrawer()

  const closeDrawer = () => {
    setDrawerIndex(-1)
  }

  const handleClick = () => {
    if (drawerIndex === index) {
      closeDrawer()
      return
    }
    setDrawerIndex(index)
  }

  const isActive = drawerIndex === index

  return (
    <>
      <Overlay $isOpen={isActive} onClick={closeDrawer} />
      <Container $isOpen={drawerIndex !== -1} $isTargeted={isActive}>
        <OpenButton $index={index} onClick={handleClick} isActive={isActive}>
          {buttonText}
        </OpenButton>
        <ContentDrawer>
          {title && <h2>{title}</h2>}
          <Content>{children}</Content>
          <CloseButton onClick={closeDrawer}>
            <Close />
          </CloseButton>
        </ContentDrawer>
      </Container>
    </>
  )
}

const isOpenOverlayStyle = css`
  display: block;
`

const Overlay = styled.div<{ $isOpen: boolean }>`
  ${({ theme, $isOpen }) => css`
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: none;
    background-color: ${theme.textColour};
    opacity: 0.2;
    cursor: pointer;

    ${$isOpen && isOpenOverlayStyle}
  `}
`

const isOpenStyle = css`
  right: 0;
`
const isTargetedStyle = css`
  z-index: 11;
`

const Container = styled.div<{ $isOpen: boolean; $isTargeted: boolean }>`
  position: fixed;
  z-index: 10;
  right: -80vw;
  top: 0;

  display: flex;
  flex-flow: row nowrap;
  transition: right 0.3s ease;
  pointer-events: none;

  ${({ $isOpen }) => $isOpen && isOpenStyle}
  ${({ $isTargeted }) => $isTargeted && isTargetedStyle}
`

const OpenButton = styled(Button)<{ $index: number }>`
  position: relative;
  border-radius: 10px 0 0 10px;
  padding: 0rem 1rem;
  top: ${({ $index }) => `calc(10vh + (3rem * ${$index}) + (10px * ${$index}))`};
  pointer-events: all;
`

const ContentDrawer = styled.div`
  position: relative;
  top: 0;
  background: white;
  height: 100vh;
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
  width: calc(80vw);
  pointer-events: all;
`

const Content = styled.div`
  padding: 2rem;
`

const CloseButton = styled(ButtonIcon)`
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;

  svg {
    width: 1.6rem;
  }
`
