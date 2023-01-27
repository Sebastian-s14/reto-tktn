import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CustomIcon } from '@components'

interface EmptyProps {
  text?: string
  icon?: string
}

export const Empty = ({
  text = 'Por favor seleccione una categoría',
  icon = 'touch-app',
}: EmptyProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.text}>{text}</Text>
      <CustomIcon icon={icon} size={60} />
    </View>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
})
