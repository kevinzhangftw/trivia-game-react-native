import { combineReducers } from 'redux'
import quizzes from './quizzes'
import result from './result'

export default combineReducers({
  quizzes,
  result
})
