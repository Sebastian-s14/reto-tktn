import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CustomIcon } from '@components'
import { useStore } from '@store'
import { theme } from '@theme'
import { Hotel } from '@types'

interface HotelCardProps {
  hotel: Hotel
}

export const HotelCard = ({ hotel }: HotelCardProps) => {
  const {
    id,
    name,
    image,
    distance,
    price,
    priceDescription,
    description,
    rate,
    stars,
    isFavorite,
  } = hotel
  const addFavoriteHotel = useStore(state => state.addFavoriteHotel)
  const removeFavoriteHotel = useStore(state => state.removeFavoriteHotel)
  const memoStars = useMemo(
    () => [...Array(stars)].map(() => '⭐').join(''),
    [stars],
  )

  const handleFavorite = () =>
    isFavorite ? removeFavoriteHotel(id) : addFavoriteHotel(hotel)

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
        <View style={styles.header}>
          <Text style={styles.textName}>{name}</Text>
          <TouchableOpacity onPress={handleFavorite}>
            <CustomIcon
              icon={isFavorite ? 'favorite' : 'favorite-border'}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text>{memoStars}</Text>
          <Text style={styles.textDistance}>{distance}</Text>
          <View style={styles.priceSection}>
            <Text>Price: </Text>
            <Text style={styles.textPriceDescription}>{priceDescription}</Text>
          </View>
          <Text style={styles.textPrice}>$ {price}</Text>
        </View>
        <View style={styles.footer}>
          <View>
            {description.map((d, index) => (
              <Text key={index} style={styles.textDescription}>
                {d}
              </Text>
            ))}
          </View>
          <View style={styles.textRateContainer}>
            <Text style={styles.textRate}>{rate}</Text>
          </View>
        </View>
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
  },
  detailsContainer: {
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flex: 0.6,
    display: 'flex',
    paddingBottom: 8,
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRateContainer: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: theme.secondaryColor,
  },
  textRate: {
    color: '#FFF',
  },
})
