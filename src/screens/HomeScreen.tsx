import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CategoryList, CustomIcon } from '@components'
import { Spacer } from '@ui'

export const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>New York, US</Text>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>The best price</Text>
        <CustomIcon icon="tune" color="#000" />
      </View>
      <Spacer />
      <CategoryList />
      <Spacer />
    </View>
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
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
})
