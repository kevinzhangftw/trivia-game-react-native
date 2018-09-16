import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

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

class QuizScreen extends React.Component {
  handleSubmit = response => this.props.onSubmit(response)

  render () {
    const { quiz, onSubmit } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{quiz.category}</Text>
        <Button
          title='yes'
          onPress={() => onSubmit(true)}
        />
        <Button
          title='no'
          onPress={() => onSubmit(false)}
        />
      </View>
    )
  }
}

QuizScreen.propTypes = {
  quiz: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default QuizScreen
