import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface CustomIconProps {
  icon: string
  color?: string
  size?: number
}

export const CustomIcon = ({ icon, color, size = 40 }: CustomIconProps) => (
  <Icon name={icon} color={color} size={size} />
)
