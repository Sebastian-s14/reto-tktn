import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { HotelCard } from '@components'
import { Hotel } from '@types'
import { Spacer } from '@ui'

const data: Hotel[] = [
  {
    id: '1',
    name: 'Garden Hills',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1560,
    priceDescription: '6 nights stay',
    rate: 8.9,
    stars: 5,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
  },
  {
    id: '2',
    name: 'Garden Hills',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1560,
    priceDescription: '6 nights stay',
    rate: 8.9,
    stars: 5,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
  },
  {
    id: '3',
    name: 'Garden Hills',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1560,
    priceDescription: '6 nights stay',
    rate: 8.9,
    stars: 5,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
  },
]

export const HotelList = () => {
  return (
    <FlatList
      style={stlyes.hotels}
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <HotelCard hotel={item} />}
      ItemSeparatorComponent={() => <Spacer />}
    />
  )
}

const stlyes = StyleSheet.create({
  hotels: {
    flex: 1,
  },
})
