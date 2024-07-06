import { RootState } from '../store';
import { QuizItem } from '../slices/quizSlice';
export const selectQuestions = (state: RootState):QuizItem[] => state.quiz.questions;
