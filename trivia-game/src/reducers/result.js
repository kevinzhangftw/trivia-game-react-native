import { SAVE_TO_RESULT } from '../actions/result'

const initialState = {
  correctCount: 0,
  feedbackList: []
}

const quizzes = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TO_RESULT:
      console.log('result reducer correctCount:', state.correctCount)
      console.log('result reducer feedbacklist:', state.feedbackList)
      return {
        ...state,
        correctCount: action.isCorrect ? ++state.correctCount : state.correctCount,
        feedbackList: [...state.feedbackList, action.feedback]
      }
    default:
      return state
  }
}

export default quizzes
