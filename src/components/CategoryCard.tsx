import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { useCustomStore } from '@hooks'
import { theme } from '@theme'
import { Category } from '@types'

interface CategoryCardProps {
  category: Category
}

export const CategoryCard = ({
  category: { id, name, image, price },
}: CategoryCardProps) => {
  const { setActiveCategory } = useCustomStore()
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => setActiveCategory(id)}
    >
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.imageBackground}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    height: 140,
    width: 140,
  },
  imageBackground: {
    height: 140,
    width: 140,
    paddingVertical: 8,
    paddingLeft: 8,
    flex: 1,
  },
  image: {
    borderRadius: 8,
    flex: 1,
  },
  text: {
    flex: 0.4,
    color: '#000',
    fontWeight: 'bold',
    // backgroundColor: 'green',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'purple',
    alignSelf: 'flex-end',
  },
  price: {
    flex: 0.6,
    backgroundColor: theme.secondaryColor,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textAlign: 'center',
    color: '#FFF',
    padding: 6,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
})
