import type { ParamListBase, RouteProp } from '@react-navigation/native'

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

export interface TabRoute {
  name: keyof TabStackParamList
  component: ScreenComponentType<TabStackParamList, keyof TabStackParamList>
  icon: string
}

type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>
      navigation: any
    }>
  | React.ComponentType<{}>
