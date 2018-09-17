import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ResultScreen from './ResultScreen'
import { resetQuizzes } from '../../actions/quizzes'
import { resetResult } from '../../actions/result'

class ResultScreenContainer extends React.Component {
  resetStore = () => {
    this.props.resetQuizzes()
    this.props.resetResult()
  }

  handlePlayAgain = () => {
    this.resetStore()
    this.props.navigation.navigate('Home')
  }

  render () {
    const { correctCount, feedbackList } = this.props
    return (
      <ResultScreen
        correctCount={correctCount}
        feedbackList={feedbackList}
        onPlayAgain={this.handlePlayAgain}
      />
    )
  }
}

ResultScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  correctCount: PropTypes.number.isRequired,
  feedbackList: PropTypes.arrayOf(PropTypes.string).isRequired,
  resetQuizzes: PropTypes.func.isRequired,
  resetResult: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  correctCount: state.result.correctCount,
  feedbackList: state.result.feedbackList
})

const mapDispatchToProps = dispatch => ({
  resetQuizzes: () => dispatch(resetQuizzes()),
  resetResult: () => dispatch(resetResult())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreenContainer)
