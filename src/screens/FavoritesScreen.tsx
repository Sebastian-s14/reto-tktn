import React from 'react'

import { HotelList } from '@components'
import { useCustomStore } from '@hooks'
import { Empty, Title } from '@ui'

export const FavoritesScreen = () => {
  const { favoriteHotels } = useCustomStore()
  return (
    <>
      <Title text="Mis favoritos" />
      {favoriteHotels.length === 0 ? (
        <Empty text="No cuenta con favoritos" icon="error" />
      ) : (
        <HotelList hotels={favoriteHotels} />
      )}
    </>
  )
}
