import React, { useReducer } from 'react';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    // Add more questions here
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };
    case 'NEXT_QUESTION':
      const isCorrect = state.questions[state.currentQuestion].answer === state.selectedOption;
      const nextQuestion = state.currentQuestion + 1;
      let newScore = state.score;
      if (isCorrect) {
        newScore += 1;
      }
      return {
        ...state,
        currentQuestion: nextQuestion < state.questions.length ? nextQuestion : 0,
        selectedOption: '',
        score: newScore,
        showScore: nextQuestion >= state.questions.length,
      };
    case 'RESTART_QUIZ':
      return initialState;
    default:
      return state;
  }
};

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  return (
    <div>
      {state.showScore ? (
        <div>
          <div>Your score is {state.score} out of {state.questions.length}</div>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div>
            <div>{state.questions[state.currentQuestion].question}</div>
            <ul style={{flexDirection: 'column',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {state.questions[state.currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleOptionSelect(option)} style={{listStyleType: 'none', width: "5rem",background: (state.selectedOption!==option)?"white":"red"}}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default QuestionBank;
