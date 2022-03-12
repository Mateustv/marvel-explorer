import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.MadeBy>
      Made with love by {' '}
      <a
        href='https://github.com/Mateustv'
        target='_blank'
        rel="noreferrer"
      >
        Mateus Tavares
      </a>{' '}
    </S.MadeBy>

    <S.Copy>Data provided by Marvel. © 2020 MARVEL</S.Copy>
  </S.Container>
)

export default Footer