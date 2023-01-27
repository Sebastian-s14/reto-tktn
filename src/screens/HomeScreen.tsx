import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CategoryList, CustomIcon, HotelList } from '@components'
import { useStore } from '@store'
import { Empty, Spacer, Title } from '@ui'

export const HomeScreen = () => {
  const hotels = useStore(state => state.hotelsByCategory)
  const activeCategory = useStore(state => state.activeCategory)
  return (
    <>
      <Title text="New York, US" />
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>The best price</Text>
        <CustomIcon icon="tune" color="#000" />
      </View>
      <Spacer />
      <CategoryList />
      <Spacer space={18} />
      {activeCategory === '' ? <Empty /> : <HotelList hotels={hotels} />}
    </>
  )
}

const styles = StyleSheet.create({
  mainTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 18,
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
})
