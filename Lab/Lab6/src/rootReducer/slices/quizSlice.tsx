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
  optionsSelected: Option[];
  quizState: QuizCompleteState;
}

const initialState: QuizState = {
  questions: [],
  optionsSelected: [],
  quizState: "idle",
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuizItem[]>) => {
      state.questions = action.payload;
    },
    setOptionsSelected: (state) => {
      state.optionsSelected = state.questions.map((question) => {
        return {
          id: question.id,
          option: "",
        };
      })
    },
    setOption: (state, action: PayloadAction<Option>) => {
      state.optionsSelected = state.optionsSelected.map((option) => {
        if (option.id === action.payload.id) {
          return (
            action.payload.option === option.option
            ? {id: option.id, option: ""}
            : action.payload
          );
        }
        return option;
      });
    },
    setQuizState: (state, action: PayloadAction<QuizCompleteState>) => {
      state.quizState = action.payload;
    },
    // Additional reducers...
  },
});

export const { setQuestions, setOptionsSelected, setQuizState, setOption } = quizSlice.actions;

export default quizSlice.reducer;