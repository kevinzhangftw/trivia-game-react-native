import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchQuizzes } from '../../actions/quizzes'

import HomeScreen from './HomeScreen'

class HomeScreenContainer extends React.Component {
  render () {
    const { navigation } = this.props
    const handleBeginQuiz = () => {
      this.props.fetchQuizzes(10, 'hard', 'boolean')
      navigation.navigate('Quiz')
    }

    return (
      <HomeScreen onQuizBegin={handleBeginQuiz} />
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchQuizzes: (amount, difficulty, type) => dispatch(fetchQuizzes(amount, difficulty, type))
})

HomeScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchQuizzes: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
