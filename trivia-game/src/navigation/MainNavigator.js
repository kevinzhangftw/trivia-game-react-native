import { createSwitchNavigator } from 'react-navigation'
import HomeScreenContainer from '../components/HomeScreen/HomeScreenContainer'
import ResultScreen from '../components/ResultScreen'
import QuizScreenContainer from '../components/QuizScreen/QuizScreenContainer'

export default createSwitchNavigator(
  {
    Home: HomeScreenContainer,
    Quiz: QuizScreenContainer,
    Result: ResultScreen
  },
  {
    initialRouteName: 'Home'
  }
)
