import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuizItem {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizState {
  questions: QuizItem[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  questions: [],
  loading: false,
  error: null,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuizItem[]>) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action: PayloadAction<QuizItem>) => {
      state.questions.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    // You can add more reducers here as needed
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;