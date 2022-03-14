import React from 'react'
import Heading from '../../components/Heading'
import Search from '../../components/Search'
import BaseTemplate from '../Base'

function HomeTemplete() {
  return (
    <BaseTemplate>
      <Heading>
        Search for your favorites Marvel heroes
      </Heading>
      <Search />
    </BaseTemplate>
  )
}

export default HomeTemplete