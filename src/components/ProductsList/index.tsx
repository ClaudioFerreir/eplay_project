import Game from '../../Models/Game'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  background: 'black' | 'gray'
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => (
  <Container $background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
