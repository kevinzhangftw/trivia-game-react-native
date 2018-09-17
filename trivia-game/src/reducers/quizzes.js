import {
  REQUEST_QUIZZES,
  RECEIVE_QUIZZES,
  SET_CURRENT_INDEX,
  RESET_QUIZZES
} from '../actions/quizzes'

const initialState = {
  isFetching: false,
  quizzes: [],
  currentIndex: 0
}

const quizzes = (state = initialState, action) => {
  switch (action.type) {
    case RESET_QUIZZES:
      return initialState
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.currentIndex
      }
    case REQUEST_QUIZZES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_QUIZZES:
      return {
        ...state,
        isFetching: false,
        quizzes: action.quizzes,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default quizzes
