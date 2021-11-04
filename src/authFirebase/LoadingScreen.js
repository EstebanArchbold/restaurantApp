import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const LoadinScreen = () => {

const { container } = styles
return(
  <View style={container}>
    <Text>LoadinScreen</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
  justifyContent: 'center',
  alignItems: 'center',
  }
})

