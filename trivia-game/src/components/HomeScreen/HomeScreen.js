import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class HomeScreen extends React.Component {
  render () {
    const { onQuizBegin } = this.props
    const handleBeginQuiz = onQuizBegin
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title='BEGIN'
          onPress={handleBeginQuiz}
        >
          BEGIN
        </Button>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  onQuizBegin: PropTypes.func.isRequired
}

export default HomeScreen
