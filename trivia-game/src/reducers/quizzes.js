import {
  REQUEST_QUIZZES,
  RECEIVE_QUIZZES
} from '../actions/quizzes'

const initialState = {
  isFetching: false,
  quizzes: []
}

const quizzes = (state = initialState, action) => {
  switch (action.type) {
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
