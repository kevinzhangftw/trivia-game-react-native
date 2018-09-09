import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    width: 250
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 50,
    width: 250
  }
})

class HomeScreen extends React.Component {
  render () {
    const { onQuizBegin } = this.props
    const handleBeginQuiz = onQuizBegin
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.subHeader}>You will be presented with 10 True or False Questions</Text>
        <Text style={styles.subHeader}>Can you score 100%?</Text>
        <Button
          title='BEGIN'
          onPress={handleBeginQuiz}
        />
      </View>
    )
  }
}

HomeScreen.propTypes = {
  onQuizBegin: PropTypes.func.isRequired
}

export default HomeScreen
