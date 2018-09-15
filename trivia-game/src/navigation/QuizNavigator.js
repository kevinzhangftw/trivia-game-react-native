import { createSwitchNavigator } from 'react-navigation'
import QuizScreenContainer from '../components/QuizScreen/QuizScreenContainer'
import QuizScreen from '../components/QuizScreen'

export default createSwitchNavigator(
  {
    QuizScreenContainer: QuizScreenContainer,
    Quiz1: QuizScreen,
    Quiz2: QuizScreen,
    Quiz3: QuizScreen,
    Quiz4: QuizScreen,
    Quiz5: QuizScreen,
    Quiz6: QuizScreen,
    Quiz7: QuizScreen,
    Quiz8: QuizScreen,
    Quiz9: QuizScreen,
    Quiz10: QuizScreen
  },
  { initialRouteName: 'QuizScreenContainer' }
)
