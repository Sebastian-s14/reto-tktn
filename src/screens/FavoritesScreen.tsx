import React from 'react'

import { HotelList } from '@components'
import { useStore } from '@store'
import { Empty, Title } from '@ui'

export const FavoritesScreen = () => {
  const favoriteHotels = useStore(state => state.favoriteHotels)
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
