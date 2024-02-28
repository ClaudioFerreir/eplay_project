import { Container, FooterSection, FooterTitle, Link, Links } from './styles'

const CurrentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <FooterTitle>Categorias</FooterTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{CurrentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
