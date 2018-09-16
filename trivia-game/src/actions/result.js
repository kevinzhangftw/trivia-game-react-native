export const SAVE_TO_RESULT = 'SAVE_TO_RESULT'

const verifyAnswer = (quiz, input) => quiz.correct_answer === input
const getFeedback = (isCorrect, question) => {
  const sign = isCorrect ? '+' : '-'
  return `${sign} ${question}`
}

export const saveToResult = (quiz, input) => {
  const isCorrect = verifyAnswer(quiz, input)
  console.log('result action isCorrect:', isCorrect)
  console.log('result action getFeedback:', getFeedback(isCorrect, quiz.question))
  return {
    type: SAVE_TO_RESULT,
    isCorrect: isCorrect,
    feedback: getFeedback(isCorrect, quiz.question)
  }
}
