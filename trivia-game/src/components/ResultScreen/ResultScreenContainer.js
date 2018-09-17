import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ResultScreen from './ResultScreen'
import { resetQuizzes } from '../../actions/quizzes'

class ResultScreenContainer extends React.Component {
  handlePlayAgain = () => {
    this.props.dispatch(resetQuizzes())
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
  feedbackList: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = state => ({
  correctCount: state.result.correctCount,
  feedbackList: state.result.feedbackList
})

export default connect(mapStateToProps)(ResultScreenContainer)
