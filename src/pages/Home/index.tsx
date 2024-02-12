import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import Game from '../../Models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e, diferentemente de seus antecessores, ação-aventura e tiro em terceira pessoa, desenvolvido e lançado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e, diferentemente de seus antecessores, ação-aventura e tiro em terceira pessoa, desenvolvido e lançado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e, diferentemente de seus antecessores, ação-aventura e tiro em terceira pessoa, desenvolvido e lançado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e, diferentemente de seus antecessores, ação-aventura e tiro em terceira pessoa, desenvolvido e lançado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo III é um RPG de ação que se passa no Santuário, um mundo de fantasia sombria.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo III é um RPG de ação que se passa no Santuário, um mundo de fantasia sombria.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo III é um RPG de ação que se passa no Santuário, um mundo de fantasia sombria.',
    title: 'Diablo 4',
    system: 'Star Wars',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo III é um RPG de ação que se passa no Santuário, um mundo de fantasia sombria.',
    title: 'Resident Evil 4',
    system: 'Nitendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Promoções" background="black" />
  </>
)

export default Home