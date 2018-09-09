import { createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import QuizScreen from '../components/QuizScreen'
import ResultScreen from '../components/ResultScreen'

export default createSwitchNavigator(
  {
    Home: HomeScreen,
    Quiz: QuizScreen,
    Result: ResultScreen
  },
  {
    initialRouteName: 'Home'
  }
)
