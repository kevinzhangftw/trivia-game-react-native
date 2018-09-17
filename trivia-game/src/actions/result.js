export const SAVE_TO_RESULT = 'SAVE_TO_RESULT'
export const RESET_RESULT = 'RESET_RESULT'

const verifyAnswer = (quiz, input) => quiz.correct_answer === input

const getFeedback = (isCorrect, question) => {
  const sign = isCorrect ? '+' : '-'
  return `${sign} ${question}`
}

export const resetResult = () => {
  return {
    type: RESET_RESULT
  }
}

export const saveToResult = (quiz, input) => {
  const isCorrect = verifyAnswer(quiz, input)
  return {
    type: SAVE_TO_RESULT,
    isCorrect: isCorrect,
    feedback: getFeedback(isCorrect, quiz.question)
  }
}
