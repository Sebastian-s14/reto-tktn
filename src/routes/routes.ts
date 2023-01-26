import {
  FavoritesScreen,
  HomeScreen,
  NavigationScreen,
  SettingsScreen,
} from '@screens'
import { TabRoute } from '@types'

export const routes: TabRoute[] = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'NavigationScreen',
    component: NavigationScreen,
    icon: 'explore',
  },
  {
    name: 'FavoritesScreen',
    component: FavoritesScreen,
    icon: 'favorite',
  },
  {
    name: 'SettingsScreen',
    component: SettingsScreen,
    icon: 'settings',
  },
]
