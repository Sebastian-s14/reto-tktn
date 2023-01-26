import React from 'react'
import { View } from 'react-native'

interface SpaceProps {
  vertical?: boolean
  space?: number
}

export const Spacer = ({ vertical = true, space = 8 }: SpaceProps) => {
  return (
    <View
      style={[
        vertical ? { marginVertical: space } : { marginHorizontal: space },
      ]}
    />
  )
}
