import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'

import { CustomIcon } from '@components'
import { routes } from '@routes'
import { TabStackParamList } from '@types'
import { theme } from '@theme'

const Tab = createBottomTabNavigator<TabStackParamList>()

export const TabNavigator = () => {
  const { height } = useWindowDimensions()

  return (
    <Tab.Navigator
      sceneContainerStyle={styles.sceneContainerStyle}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.mainColor,
        tabBarInactiveTintColor: theme.inactiveColor,
        tabBarStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
          borderTopWidth: 0,
          height: height * 0.1,
        },
      }}
    >
      {routes.map(({ name, icon, component }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <CustomIcon icon={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  sceneContainerStyle: {
    flex: 1,
    backgroundColor: theme.blankColor,
    padding: 16,
  },
})
