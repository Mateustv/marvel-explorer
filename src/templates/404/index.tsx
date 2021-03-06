import BaseTemplate from '../../templates/Base';

import Link from 'next/link'

import * as S from './styles'
import Empty from '../../components/Empty';



export default function Page404() {
  return (
    <BaseTemplate>
      <S.Center>
        <Empty imagePath="/images/404.svg" imageAlt="An image with 404 number">
          <S.Message>
            Oops ... this page you tried to access does not exist.
          </S.Message>
          <Link href="/">
            <S.GoBackHome>click here to return home</S.GoBackHome>
          </Link>
        </Empty>
      </S.Center>
    </BaseTemplate>
  )
}
