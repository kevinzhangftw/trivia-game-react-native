export const FETCH_QUIZZES = 'FETCH_QUIZZES'
export const REQUEST_QUIZZES = 'REQUEST_QUIZZES'
export const RECEIVE_QUIZZES = 'RECEIVE_QUIZZES'
export const SET_CURRENT_INDEX = 'SET_CURRENT_INDEX'

export const setCurrentIndex = prevIndex => {
  return {
    type: SET_CURRENT_INDEX,
    currentIndex: prevIndex++
  }
}

const requestQuizzes = () => {
  return {
    type: REQUEST_QUIZZES
  }
}

const receiveQuizzes = json => {
  return {
    type: RECEIVE_QUIZZES,
    quizzes: json.results,
    receivedAt: Date.now()
  }
}

export const fetchQuizzes = (amount, difficulty, type) => {
  return dispatch => {
    dispatch(requestQuizzes())
    return fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
    ).then(
      response => response.json(),
      error => console.log('fetchQuizzes error: ', error)
    ).then(
      json => dispatch(receiveQuizzes(json))
    )
  }
}
