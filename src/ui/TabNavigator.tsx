import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { HomeScreen, SettingsScreen } from '@screens'
import { TabStackParamList } from '@types'

const Tab = createBottomTabNavigator<TabStackParamList>()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
