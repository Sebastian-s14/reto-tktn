import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TitleProps {
  text: string
}
export const Title = ({ text }: TitleProps) => {
  return <Text style={styles.headerTitle}>{text}</Text>
}
const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 18,
  },
})
