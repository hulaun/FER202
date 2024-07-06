import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  images: string;
}

export interface NewsState {
  news: NewsItem[];
}

const initialState: NewsState = {
  news: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload;
    },
    // Other reducers...
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
