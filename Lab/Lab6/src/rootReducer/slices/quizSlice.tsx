import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Option {
  id: number;
  option: string;
}

type QuizCompleteState = "true" | "false" | "idle";

export interface QuizItem {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizState {
  questions: QuizItem[];
  options: Option[];
  quizState: QuizCompleteState;
}

const initialState: QuizState = {
  questions: [],
  options: [],
  quizState: "idle",
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuizItem[]>) => {
      state.questions = action.payload;
    },
    setOptions: (state, action: PayloadAction<Option[]>) => {
      state.options = action.payload;
    },
    setQuizState: (state, action: PayloadAction<QuizCompleteState>) => {
      state.quizState = action.payload;
    },
    // Additional reducers...
  },
});

export const { setQuestions, setOptions, setQuizState } = quizSlice.actions;

export default quizSlice.reducer;