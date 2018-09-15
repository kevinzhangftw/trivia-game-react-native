import React from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuizScreen from './QuizScreen'
import { setCurrentIndex } from '../../actions/quizzes'

class QuizScreenContainer extends React.Component {
  render () {
    const { isFetching, quizzes, currentIndex, navigation } = this.props
    const handleSubmit = answer => {
      const prevIndex = currentIndex
      setCurrentIndex(prevIndex)
      // dispatch(tallyAnswer(answer))
      // navigation.navigate(nextQuiz(), quizParams)
    }

    if (isFetching) {
      return (<ActivityIndicator size='small' color='black' />)
    } else {
      return (
        <QuizScreen
          quiz={quizzes[0]}
          onSubmit={handleSubmit}
        />
      )
    }
  }
}

const mapStateToProps = state => ({
  isFetching: state.quizzes.isFetching,
  quizzes: state.quizzes.quizzes,
  currentIndex: state.quizzes.currentIndexs
})

const mapDispatchToProps = dispatch => ({
  setCurrentIndex: prevIndex => dispatch(setCurrentIndex(prevIndex))
})

QuizScreenContainer.propTypes = {
  isFetching: PropTypes.bool,
  quizzes: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
  currentIndex: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreenContainer)
