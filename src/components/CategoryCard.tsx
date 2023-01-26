import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Category } from '@types'
import { theme } from '@theme'

interface CategoryCardProps {
  category: Category
}

export const CategoryCard = ({
  category: { name, image, price },
}: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
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
    height: 120,
    width: 120,
  },
  imageBackground: {
    height: 120,
    width: 120,
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
