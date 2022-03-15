import Link from 'next/link';
import { useEffect, useState } from 'react';
import Empty from '../../components/Empty';
import Heading from '../../components/Heading';
import HeroCard from '../../components/HeroCard';
import HeroesGrid from '../../components/HeroesGrid';
import { HeroData, useFavoriteHeroes } from '../../hooks/useFavoriteHeroes';
import BaseTemplate from '../Base';

import * as S from './styles';


const FavoritesTemplate = () => {

  const { getFavoriteHeroes } = useFavoriteHeroes()
  const [heroes, setHeroes] = useState<HeroData[]>([])

  useEffect(() => {
    setHeroes(getFavoriteHeroes())
  }, [getFavoriteHeroes])

  return (
    <BaseTemplate>
      <Heading>
        My favorites heroes
      </Heading>

      <S.Results>
        {heroes.length ? (
          <HeroesGrid applyAutoFit={heroes.length >= 4}>
            {heroes.map(hero => (
              <HeroCard
                key={hero.heroId}
                heroId={hero.heroId}
                heroName={hero.heroName}
                heroThumbnail={hero.heroThumbnail}
              />
            ))}
          </HeroesGrid>
        ) : (
          <Empty imagePath="/images/spider-web.svg" imageAlt="A spider web">
            <S.Message>
              You don't have any favorite heroes yet
            </S.Message>
            <Link href="/">
              <S.GoToSearch>Look for heroes</S.GoToSearch>
            </Link>
          </Empty>
        )}
      </S.Results>
    </BaseTemplate>
  )
}

export default FavoritesTemplate