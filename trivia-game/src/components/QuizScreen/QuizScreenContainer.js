import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingScreen from '../LoadingScreen'
import QuizScreen from './QuizScreen'
import { setCurrentIndex } from '../../actions/quizzes'

class QuizScreenContainer extends React.Component {
  handleSubmit = answer => {
    const prevIndex = this.props.currentIndex
    this.props.setCurrentIndex(prevIndex)
    // dispatch(tallyAnswer(answer))
    // navigation.navigate(nextQuiz(), quizParams)
  }

  render () {
    const { isFetching, quizzes, currentIndex, navigation } = this.props

    if (isFetching) {
      return (<LoadingScreen />)
    } else {
      return (
        <QuizScreen
          quiz={quizzes[currentIndex]}
          onSubmit={(answer) => this.handleSubmit(answer)}
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
  setCurrentIndex: prevIndex => dispatch(setCurrentIndex(prevIndex))
})

QuizScreenContainer.propTypes = {
  isFetching: PropTypes.bool,
  quizzes: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreenContainer)
