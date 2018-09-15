import {
  REQUEST_QUIZZES,
  RECEIVE_QUIZZES,
  SET_CURRENT_INDEX
} from '../actions/quizzes'

const initialState = {
  isFetching: false,
  quizzes: [],
  currentIndex: 0
}

const quizzes = (state = initialState, action) => {
  switch (action.type) {
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
