import Section from '../Section'

import { Item, Items } from './styles'

import spiderImg from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items className="container">
      <Item>
        <img src={spiderImg} alt="imagem do link" />
      </Item>
      <Item>
        <img src={spiderImg} alt="imagem do link" />
      </Item>
      <Item>
        <img src={spiderImg} alt="imagem do link" />
      </Item>
      <Item>
        <img src={spiderImg} alt="imagem do link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
