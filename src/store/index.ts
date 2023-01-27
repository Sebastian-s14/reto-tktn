import { create } from 'zustand'

import { Hotel } from '@types'

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
    categoryId: '1',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Hyatt place',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1000,
    priceDescription: '6 nights stay',
    rate: 7.8,
    stars: 3,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
    categoryId: '1',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Garden Hills 2',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1560,
    priceDescription: '6 nights stay',
    rate: 5.2,
    stars: 2,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
    categoryId: '2',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Garden Hills 3',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1560,
    priceDescription: '6 nights stay',
    rate: 5.2,
    stars: 2,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
    categoryId: '2',
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Garden Hills 4',
    image:
      'https://www.infobatumi.ge/wp-content/uploads/2022/05/Hotel-Monarch-1-INFOBATUMI.GE_-150x150.jpg',
    price: 1560,
    priceDescription: '6 nights stay',
    rate: 5.2,
    stars: 2,
    distance: '2.1 km from center',
    description: ['Breakfast included', 'Free Cancellation'],
    categoryId: '2',
    isFavorite: false,
  },
]

interface State {
  hotels: Hotel[]
  hotelsByCategory: Hotel[]
  favoriteHotels: Hotel[]
  activeCategory: string
  setActiveCategory: (category: string) => void
  addFavoriteHotel: (hotel: Hotel) => void
  removeFavoriteHotel: (hotelId: string) => void
}

export const useStore = create<State>(set => ({
  hotels: data,
  hotelsByCategory: [],
  favoriteHotels: [],
  activeCategory: '',
  setActiveCategory: activeCategory =>
    set(state => ({
      activeCategory,
      hotelsByCategory: state.hotels.filter(
        h => h.categoryId === activeCategory,
      ),
    })),
  addFavoriteHotel: hotel =>
    set(state => ({
      favoriteHotels: [...state.favoriteHotels, { ...hotel, isFavorite: true }],
      hotels: state.hotels.map(h =>
        h.id === hotel.id ? { ...h, isFavorite: true } : h,
      ),
      hotelsByCategory: state.hotelsByCategory.map(h =>
        h.id === hotel.id ? { ...h, isFavorite: true } : h,
      ),
    })),
  removeFavoriteHotel: hotelId =>
    set(state => ({
      favoriteHotels: state.favoriteHotels.filter(h => h.id !== hotelId),
      hotels: state.hotels.map(h =>
        h.id === hotelId ? { ...h, isFavorite: false } : h,
      ),
      hotelsByCategory: state.hotelsByCategory.map(h =>
        h.id === hotelId ? { ...h, isFavorite: false } : h,
      ),
    })),
}))
