import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { FavoriteBorder as FavoteBorderIcon } from '@styled-icons/material/FavoriteBorder';

import * as S from './styles'
import Image from 'next/image';
import { HeroData, useFavoriteHeroes } from '../../hooks/useFavoriteHeroes';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export type HeroCardProps = HeroData

const HeroCard = ({ heroId, heroName, heroThumbnail }: HeroCardProps) => {

  const {
    addFavoriteHero,
    isFavoriteHero,
    removeFavoriteHero,
  } = useFavoriteHeroes()

  const { push } = useRouter()

  const [isFavorite, setIsFavorite] = useState(isFavoriteHero(heroId))

  const handleAddToFavorite = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()

    const heroData = {
      heroId,
      heroName,
      heroThumbnail,
    }

    addFavoriteHero(heroData)
    setIsFavorite(true)
  }, [heroId, heroName, heroThumbnail, addFavoriteHero])

  const handleRemoveFromFavorite = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();

      removeFavoriteHero(heroId);
      setIsFavorite(false);
    },
    [heroId, removeFavoriteHero]
  );

  return (
    <S.Container onClick={() => push(`/characters/${heroId}`)}>
      <S.ImageWrapper>
        <Image
          src={heroThumbnail}
          layout="fill"
          objectFit='cover'
          alt={heroName}
        />
      </S.ImageWrapper>
      <S.HeroContent>
        <S.HeroName>{heroName}</S.HeroName>

        {isFavorite ? (
          <S.IconWrapper onClick={handleRemoveFromFavorite}>
            <FavoriteIcon aria-label='Remove hero to favorites' />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={handleAddToFavorite}>
            <FavoteBorderIcon aria-label="Add hero to favorites" />
          </S.IconWrapper>
        )
        }
      </S.HeroContent>
    </S.Container>
  )
}

export default HeroCard