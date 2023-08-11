import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
      <H1>Spelling Bee</H1>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.dark};
  padding: 10px;
`

const H1 = styled.h1`
  font-size: 1.6rem;
  text-align: center;
`
