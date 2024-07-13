import { RootState } from '../store';
import { Option, QuizItem } from '../slices/quizSlice';
export const selectQuestions = (state: RootState):QuizItem[] => state.quiz.questions;
export const selectOptionsSelected = (state: RootState):Option[] => state.quiz.optionsSelected;
export const selectQuizState = (state: RootState) => state.quiz.quizState;

