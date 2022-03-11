import Menu from '../../components/Menu';
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode;
}

const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <Menu />
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}

export default Base