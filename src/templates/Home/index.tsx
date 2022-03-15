import axios from 'axios'
import React, { useCallback, useState } from 'react'
import Empty from '../../components/Empty'
import Heading from '../../components/Heading'
import HeroCard from '../../components/HeroCard'
import HeroesGrid from '../../components/HeroesGrid'
import Loading from '../../components/Loanding'
import Search from '../../components/Search'
import ShowWhen from '../../components/ShowWhen'
import { ApiHeroProps } from '../../types/api'
import { formatThumbnailPath } from '../../utils/formatThumbnailPath'
import BaseTemplate from '../Base'
import * as S from './styles'

function HomeTemplete() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [heroes, setHeroes] = useState<ApiHeroProps[]>([])

  const handleSearch = useCallback(async (value: string) => {
    setError('')
    setLoading(true);

    try {
      const { data } = await axios.get('/api/characters', {
        params: {
          name: value,
        }
      })
      console.log(data.results)
      setHeroes(data.results)
    } catch (err: any) {
      console.log(err)

      const error = err.response?.data?.error || 'An error has occurred, try again or come back soon'
      setError(error)
    }
    setLoading(false)
  }, [])


  return (
    <BaseTemplate>
      <Heading>
        Search for your favorites Marvel heroes
      </Heading>
      <Search error={error} onSubmit={handleSearch} />

      <S.Results>
        <ShowWhen condition={loading}>
          <Loading />
        </ShowWhen>

        <ShowWhen condition={!loading && !heroes.length}>
          <Empty
            imagePath="/images/no-search.svg"
            imageAlt="A magnifying glass with sad face and with some bubbles in the background">
            Search for heroes
          </Empty>
        </ShowWhen>

        <ShowWhen condition={!loading && !!heroes.length}>
          <HeroesGrid applyAutoFit={heroes.length >= 4}>
            {heroes.map(hero => (
              <HeroCard
                key={hero.id}
                heroId={hero.id}
                heroName={hero.name}
                heroThumbnail={formatThumbnailPath(hero.thumbnail)}
              />
            ))}

          </HeroesGrid>
        </ShowWhen>

      </S.Results>
    </BaseTemplate>
  )
}

export default HomeTemplete