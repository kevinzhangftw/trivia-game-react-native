import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchQuizzes } from '../../actions/quizzes'

import HomeScreen from './HomeScreen'

class HomeScreenContainer extends React.Component {
  render () {
    const { navigation, dispatch } = this.props
    const handleBeginQuiz = () => {
      dispatch(fetchQuizzes(10, 'hard', 'boolean'))
      navigation.navigate('Quiz')
    }

    return (
      <HomeScreen onQuizBegin={handleBeginQuiz} />
    )
  }
}

HomeScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(HomeScreenContainer)
