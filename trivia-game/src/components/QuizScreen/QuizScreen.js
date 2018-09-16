import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 50,
    width: 250
  },
  questionBox: {
    borderWidth: 1,
    margin: 50
  },
  questionBody: {
    fontSize: 20,
    margin: 20
  },
  answerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pagination: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})

class QuizScreen extends React.Component {
  render () {
    const { quiz, onSubmit } = this.props
    const { category, question } = quiz
    let { currentIndex } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{category}</Text>
        <View style={styles.questionBox}>
          <Text style={styles.questionBody}>{question}</Text>
        </View>
        <Text style={styles.pagination}>{++currentIndex} out of 10</Text>
        <View style={styles.answerButtons}>
          <Button
            title='YES'
            onPress={() => onSubmit(true)}
          />
          <Button
            title='NO'
            onPress={() => onSubmit(false)}
          />
        </View>
      </View>
    )
  }
}

QuizScreen.propTypes = {
  quiz: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default QuizScreen
