import React from 'react'
import PropTypes from 'prop-types'

import HomeScreen from './HomeScreen'

class HomeScreenContainer extends React.Component {
  render () {
    const handleBeginQuiz = () => {
      this.props.navigation.navigate('Quiz')
    }

    return (
      <HomeScreen onQuizBegin={handleBeginQuiz} />
    )
  }
}

HomeScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default HomeScreenContainer
