import { RootState } from '../store';
import { QuizItem } from '../slices/quizSlice';
export const selectQuestions = (state: RootState):QuizItem[] => state.quiz.questions;
export const selectQuizLoading = (state: RootState) => state.news.loading;
export const selectQuizError = (state: RootState) => state.news.error;
