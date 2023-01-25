export type TabStackParamList = {
  HomeScreen: undefined
  SettingsScreen: undefined
  FavoritesScreen: undefined
  NavigationScreen: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabStackParamList {}
  }
}
