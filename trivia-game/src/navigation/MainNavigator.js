import { createSwitchNavigator } from 'react-navigation'
import HomeScreenContainer from '../components/HomeScreen/HomeScreenContainer'
import ResultScreenContainer from '../components/ResultScreen/ResultScreenContainer'
import QuizScreenContainer from '../components/QuizScreen/QuizScreenContainer'

export default createSwitchNavigator(
  {
    Home: HomeScreenContainer,
    Quiz: QuizScreenContainer,
    Result: ResultScreenContainer
  },
  {
    initialRouteName: 'Home'
  }
)
