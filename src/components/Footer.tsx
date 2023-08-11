import styled from 'styled-components'
import { lighten } from 'polished'

export const Footer = () => {
  return (
    <Container>
      <p>
        App built by <a href="https://github.com/melerie">Melerie</a>
      </p>
    </Container>
  )
}

const Container = styled.footer`
  padding: 20px;
  font-size: 0.8rem;
  color: ${({ theme }) => lighten(0.2, theme.textColour)};
`
