/* import { useParams } from 'react-router-dom' */
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => (
  /* const { id } = useParams() */
  <>
    <Hero />
    <Section title="Sobre o jogo" background="black">
      <p>
        &quot;Harry Potter: Horwards Legacy&quot; é um jogo de aventura mágica
        que mergulha os jogadores no mundo encantado de Hogwarts. Neste
        emocionante título, os jogadores assumem o papel de um jovem bruxo ou
        bruxa que está prestes a começar sua jornada na famosa escola de magia e
        bruxaria. Ao longo do jogo, os jogadores exploram os corredores
        misteriosos de Hogwarts, aprendem feitiços poderosos, enfrentam desafios
        emocionantes e desvendam segredos antigos.
      </p>
    </Section>
    <Section title="Mais detalhes" background="gray">
      <p>
        <b>Plataforma</b>: Playstation 5 <br />
        <b>Desenvolvedor</b>: Avalanche Software <br />
        <b>Editora</b>: Portkey Games, subsidiária da Warner Bros. Interactive
        Entertainment <br />
        <b>Idiomas</b>: O jogo oferece suporte a diversos idiomas, incluindo
        inglês, espanhol, francês, alemaão, italiano, português, entre outros.
        As opções de áudio e legendas podem ser ajustadas nas configurações do
        jogo.
      </p>
    </Section>
    <Gallery />
  </>
)

export default Product
