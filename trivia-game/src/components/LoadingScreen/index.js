import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size='small' color='black' />
  </View>
)

export default LoadingScreen
