import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { Hotel } from '@types'
import { theme } from 'theme'

interface HotelCardProps {
  hotel: Hotel
}

export const HotelCard = ({
  hotel: { name, image, distance, price, priceDescription, description },
}: HotelCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text>⭐⭐⭐⭐</Text>
        <Text style={styles.textDistance}>{distance}</Text>
        <View style={styles.priceSection}>
          <Text>Price: </Text>
          <Text style={styles.textPriceDescription}>{priceDescription}</Text>
        </View>
        <Text style={styles.textPrice}>$ {price}</Text>
        {description.map((d, index) => (
          <Text key={index} style={styles.textDescription}>
            {d}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 170,
    padding: 8,
    borderRadius: 10,
    gap: 10,
  },
  image: {
    height: 154,
    // width: 150,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 0.5,
    // backgroundColor: 'purple',
  },
  detailsContainer: {
    // backgroundColor: 'red',
    flex: 0.5,
    justifyContent: 'space-between',
  },
  textName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDistance: {
    fontSize: 12,
  },
  textPrice: {
    color: '#000',
    fontWeight: 'bold',
  },
  textPriceDescription: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textDescription: {
    fontSize: 11,
    color: theme.secondaryColor,
  },
  priceSection: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // detailsText: {

  // },
  // detailsActions :{

  // }
})
