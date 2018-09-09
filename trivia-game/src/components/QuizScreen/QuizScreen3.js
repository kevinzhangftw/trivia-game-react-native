import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class QuizScreen3 extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Quiz Screen 2 </Text>
        <Button
          title='yes'
          onPress={() => this.props.navigation.navigate('Quiz4')}
        />
        <Button
          title='no'
          onPress={() => this.props.navigation.navigate('Quiz4')}
        />
      </View>
    )
  }
}

QuizScreen3.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default QuizScreen3
