import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
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
  item: {
    fontSize: 24,
    fontWeight: '300',
    color: 'gray',
    marginLeft: 30,
    marginRight: 25,
    marginTop: 5,
    marginBottom: 5
  }
})

class ResultScreen extends React.Component {
  render () {
    const { correctCount, feedbackList, onPlayAgain } = this.props
    const handlePlayAgain = onPlayAgain
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          You scored{'\n'}
          {correctCount} out of 10
        </Text>
        <FlatList
          data={feedbackList}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(_, index) => index.toString()}
        />
        <Button
          title='PLAY AGAIN?'
          onPress={handlePlayAgain}
        />
      </View>
    )
  }
}

ResultScreen.propTypes = {
  correctCount: PropTypes.number.isRequired,
  feedbackList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlayAgain: PropTypes.func.isRequired
}

export default ResultScreen
