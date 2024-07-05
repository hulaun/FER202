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
    case 'SELECT':
      return {
        ...state,
        selectedOption: action.payload,
      };
    case 'NEXT':
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
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
};

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT', payload: option });
  };

  const handleNextQuestion = () => {
    if(!state.selectedOption){
      alert("Please choose one of the options")
      return;
    }
    dispatch({ type: 'NEXT' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART' });
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
            <ul style={{gap:"0.2rem",flexDirection: 'column',display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
              {state.questions[state.currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleOptionSelect(option)} style={{paddingLeft:"0.2rem",borderRadius: "2rem",border:"0.1rem solid black", listStyleType: 'number', width: "10rem", textAlign:"start",background: (state.selectedOption!==option)?"white":"green"}}>
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
