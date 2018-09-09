import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class ResultScreenContainer extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Result Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ResultScreenContainer
