import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";
import newsSlice from "./slices/newsSlice";
import contactSlice from "./slices/contactSlice";

import type { QuizState } from "./slices/quizSlice";
import type { NewsState } from "./slices/newsSlice";
import type { ContactState } from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    quiz: quizSlice,
    news: newsSlice,
    contact: contactSlice,
  }
});

export type { QuizState, NewsState, ContactState };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
