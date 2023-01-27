import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { theme } from '@theme'

interface CustomIconProps {
  icon: string
  color?: string
  size?: number
}

export const CustomIcon = ({
  icon,
  color = theme.secondaryColor,
  size = 40,
}: CustomIconProps) => <Icon name={icon} color={color} size={size} />
