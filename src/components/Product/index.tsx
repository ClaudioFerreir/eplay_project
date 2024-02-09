import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo></Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero
      quod dicta maxime et ducimus totam rem, tempore sit natus sapiente aliquam
      labore a. Dolor cupiditate nemo aspernatur necessitatibus minus?
    </Descricao>
  </Card>
)

export default Product
