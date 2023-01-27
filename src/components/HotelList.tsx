import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { HotelCard } from '@components'
import { Hotel } from '@types'
import { Empty, Spacer } from '@ui'

interface HotelListProps {
  hotels: Hotel[]
}

export const HotelList = ({ hotels }: HotelListProps) => {
  if (hotels.length === 0)
    return <Empty text="No hay elementos en esta categoría" icon="error" />

  return (
    <FlatList
      style={stlyes.hotels}
      data={hotels}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <HotelCard hotel={item} />}
      ItemSeparatorComponent={() => <Spacer />}
      showsVerticalScrollIndicator={false}
      // ListEmptyComponent={<Empty text="No hay elementos" />}
    />
  )
}

const stlyes = StyleSheet.create({
  hotels: {
    flex: 1,
  },
})
