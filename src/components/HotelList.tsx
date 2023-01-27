import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { HotelCard } from '@components'
import { Hotel } from '@types'
import { Empty, Spacer } from '@ui'

interface HotelListProps {
  hotels: Hotel[]
  textEmpty?: string
  iconEmpty?: string
}

export const HotelList = ({
  hotels,
  textEmpty = 'No hay elementos',
  iconEmpty = 'error',
}: HotelListProps) => {
  return (
    <FlatList
      data={hotels}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <HotelCard hotel={item} />}
      ItemSeparatorComponent={() => <Spacer />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={stlyes.contentContainerStyle}
      ListEmptyComponent={<Empty text={textEmpty} icon={iconEmpty} />}
    />
  )
}

const stlyes = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
})
