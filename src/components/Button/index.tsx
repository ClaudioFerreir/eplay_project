import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string //desmonstra um texto ao estar em cima do botão
  to?: string //link para onde o botão vai
  onClick?: () => void //função que será executada ao clicar no botão
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        $variant={variant}
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
