import { createSwitchNavigator } from 'react-navigation'
import QuizScreen1 from '../components/QuizScreen/QuizScreen1'
import QuizScreen2 from '../components/QuizScreen/QuizScreen2'
import QuizScreen3 from '../components/QuizScreen/QuizScreen3'
import QuizScreen4 from '../components/QuizScreen/QuizScreen4'
import QuizScreen5 from '../components/QuizScreen/QuizScreen5'
import QuizScreen6 from '../components/QuizScreen/QuizScreen6'
import QuizScreen7 from '../components/QuizScreen/QuizScreen7'
import QuizScreen8 from '../components/QuizScreen/QuizScreen8'
import QuizScreen9 from '../components/QuizScreen/QuizScreen9'
import QuizScreen10 from '../components/QuizScreen/QuizScreen10'

export default createSwitchNavigator(
  {
    Quiz1: QuizScreen1,
    Quiz2: QuizScreen2,
    Quiz3: QuizScreen3,
    Quiz4: QuizScreen4,
    Quiz5: QuizScreen5,
    Quiz6: QuizScreen6,
    Quiz7: QuizScreen7,
    Quiz8: QuizScreen8,
    Quiz9: QuizScreen9,
    Quiz10: QuizScreen10
  },
  {
    initialRouteName: 'Quiz1'
  }
)
