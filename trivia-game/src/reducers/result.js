import { SAVE_TO_RESULT, RESET_RESULT } from '../actions/result'

const initialState = {
  correctCount: 0,
  feedbackList: []
}

const result = (state = initialState, action) => {
  switch (action.type) {
    case RESET_RESULT:
      return initialState
    case SAVE_TO_RESULT:
      return {
        ...state,
        correctCount: action.isCorrect ? ++state.correctCount : state.correctCount,
        feedbackList: [...state.feedbackList, action.feedback]
      }
    default:
      return state
  }
}

export default result
