import { Hexagon } from './Hexagon'
import { Container } from './styles'

export const Hexagons = () => {
  return (
    <Container>
      {[...Array(7)].map((_, i) => {
        return <Hexagon onClick={() => undefined}>{i}</Hexagon>
      })}
    </Container>
  )
}
