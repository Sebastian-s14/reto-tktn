import React from 'react'

import { HotelList } from '@components'
import { useCustomStore } from '@hooks'
import { Title } from '@ui'

export const FavoritesScreen = () => {
  const { favoriteHotels } = useCustomStore()
  return (
    <>
      <Title text="Mis favoritos" />
      <HotelList hotels={favoriteHotels} textEmpty="No cuenta con favoritos" />
    </>
  )
}
