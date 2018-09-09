import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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

class QuizScreen1 extends React.Component {
  render () {
    const { quizzes } = this.props
    const quiz1 = quizzes[0]
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{quiz1.category}</Text>
        <Button
          title='yes'
          onPress={() => this.props.navigation.navigate('Quiz2')}
        />
        <Button
          title='no'
          onPress={() => this.props.navigation.navigate('Quiz2')}
        />
      </View>
    )
  }
}

QuizScreen1.propTypes = {
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return ({
    quizzes: state.quizzes
  })
}
export default connect(mapStateToProps)(QuizScreen1)
