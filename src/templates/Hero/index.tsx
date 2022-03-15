import Image from 'next/image';
import { useRouter } from "next/router";

import BaseTemplate from '../Base';
import Loading from '../../components/Loanding';
import HeroInfo from '../../components/HeroInfo';

import * as S from './styles'

export type HeroTemplateProps = {
  id: number;
  name: string;
  description?: string;
  wikiLink: string;
  comics: number;
  series: number;
  stories: number;
  thumbnail: string;
};

const HeroTemplate = (props: HeroTemplateProps) => {
  const { isFallback } = useRouter()
  return (
    <BaseTemplate>
      {isFallback ? (
        <S.Center>
          <Loading />
        </S.Center>
      ) : (
        <>
          <S.ThumbnailWrapper>
            <Image src={props.thumbnail} layout="fill" objectFit="cover" />
          </S.ThumbnailWrapper>

          <S.InfoWrapper>
            <HeroInfo {...props} />
          </S.InfoWrapper>
        </>
      )}
    </BaseTemplate>
  )
}

export default HeroTemplate