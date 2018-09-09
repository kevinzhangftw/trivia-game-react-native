import { createSwitchNavigator } from 'react-navigation'
import HomeScreenContainer from '../components/HomeScreen/HomeScreenContainer'
import QuizNavigator from './QuizNavigator'
import ResultScreen from '../components/ResultScreen'

export default createSwitchNavigator(
  {
    Home: HomeScreenContainer,
    Quiz: QuizNavigator,
    Result: ResultScreen
  },
  {
    initialRouteName: 'Home'
  }
)
