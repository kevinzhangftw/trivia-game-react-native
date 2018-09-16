import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingScreen from '../LoadingScreen'
import QuizScreen from './QuizScreen'
import { setCurrentIndex } from '../../actions/quizzes'
import { saveToResult } from '../../actions/result'

class QuizScreenContainer extends React.Component {
  goToNextQuiz = currentIndex => {
    const prevIndex = currentIndex
    this.props.setCurrentIndex(prevIndex)
  }

  shouldNavigate = (currentIndex, totalCount) => {
    return currentIndex === (totalCount - 1)
  }

  handleSubmit = input => {
    const { quizzes, currentIndex, navigation } = this.props
    const quiz = quizzes[currentIndex]
    this.props.saveToResult(quiz, input)
    this.shouldNavigate(currentIndex, quizzes.length)
      ? navigation.navigate('Result')
      : this.goToNextQuiz(currentIndex)
  }

  render () {
    const { isFetching, quizzes, currentIndex } = this.props
    if (isFetching) {
      return (<LoadingScreen />)
    } else {
      return (
        <QuizScreen
          quiz={quizzes[currentIndex]}
          currentIndex={currentIndex}
          onSubmit={(input) => this.handleSubmit(input)}
        />
      )
    }
  }
}

const mapStateToProps = state => ({
  isFetching: state.quizzes.isFetching,
  quizzes: state.quizzes.quizzes,
  currentIndex: state.quizzes.currentIndex
})

const mapDispatchToProps = dispatch => ({
  setCurrentIndex: prevIndex => dispatch(setCurrentIndex(prevIndex)),
  saveToResult: (quiz, input) => dispatch(saveToResult(quiz, input))
})

QuizScreenContainer.propTypes = {
  isFetching: PropTypes.bool,
  quizzes: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
  saveToResult: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreenContainer)
